import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080";

const toBase64 = (buffer) => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return window.btoa(binary);
};

const fromBase64 = (b64) => {
  const binary = window.atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
};

const exportPublicKey = async (publicKey) => {
  const spki = await window.crypto.subtle.exportKey("spki", publicKey);
  return toBase64(spki);
};

const exportPrivateKey = async (privateKey) => {
  const pkcs8 = await window.crypto.subtle.exportKey("pkcs8", privateKey);
  return toBase64(pkcs8);
};

const importPublicKey = async (b64) =>
  window.crypto.subtle.importKey(
    "spki",
    fromBase64(b64),
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["encrypt"]
  );

const importPrivateKey = async (b64) =>
  window.crypto.subtle.importKey(
    "pkcs8",
    fromBase64(b64),
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["decrypt"]
  );

const encryptText = async (text, publicKey) => {
  const encoded = new TextEncoder().encode(text);
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    encoded
  );
  return toBase64(encrypted);
};

const decryptText = async (cipherTextB64, privateKey) => {
  const decrypted = await window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    fromBase64(cipherTextB64)
  );
  return new TextDecoder().decode(decrypted);
};

function SecureChatPage() {
  const [me, setMe] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [privateKey, setPrivateKey] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const myRoleIsDoctor = useMemo(
    () => me && (me.role === "doctor" || me.role === "professional"),
    [me]
  );

  const fetchRooms = async () => {
    const { data } = await axios.get(`${API}/secure-chat/rooms`, {
      withCredentials: true
    });
    setRooms(data.rooms || []);
  };

  const setupKeys = async (user) => {
    const storageKey = `secure_private_key_${user._id}`;
    const existing = localStorage.getItem(storageKey);

    if (existing) {
      const imported = await importPrivateKey(existing);
      setPrivateKey(imported);
      return;
    }

    const pair = await window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      },
      true,
      ["encrypt", "decrypt"]
    );

    const pub = await exportPublicKey(pair.publicKey);
    const priv = await exportPrivateKey(pair.privateKey);
    localStorage.setItem(storageKey, priv);

    await axios.put(
      `${API}/auth/public-key`,
      { encryptionPublicKey: pub },
      { withCredentials: true }
    );

    setPrivateKey(pair.privateKey);
  };

  const fetchUsers = async (isDoctor) => {
    const role = isDoctor ? "patient" : "doctor";
    const { data } = await axios.get(`${API}/secure-chat/users?role=${role}`, {
      withCredentials: true
    });
    setDirectory(data.users || []);
  };

  const loadMessages = async (room) => {
    if (!room) return;
    const { data } = await axios.get(`${API}/secure-chat/messages/${room._id}`, {
      withCredentials: true
    });

    const parsed = await Promise.all(
      (data.messages || []).map(async (msg) => {
        try {
          const encryptedPayload = myRoleIsDoctor
            ? msg.encryptedForDoctor
            : msg.encryptedForPatient;
          const plain = await decryptText(encryptedPayload, privateKey);
          return { ...msg, plainText: plain };
        } catch (e) {
          return { ...msg, plainText: "[Unable to decrypt message]" };
        }
      })
    );

    setMessages(parsed);
  };

  useEffect(() => {
    let intervalRef;
    (async () => {
      try {
        const meRes = await axios.get(`${API}/auth/me`, { withCredentials: true });
        setMe(meRes.data.user);
        await setupKeys(meRes.data.user);
      } catch (e) {
        setError("Please login first to access secure chat.");
      }
    })();

    return () => {
      if (intervalRef) clearInterval(intervalRef);
    };
  }, []);

  useEffect(() => {
    if (!me) return;
    (async () => {
      await fetchUsers(myRoleIsDoctor);
      await fetchRooms();
    })();
  }, [me, myRoleIsDoctor]);

  useEffect(() => {
    if (!activeRoom || !privateKey || !me) return;

    loadMessages(activeRoom);
    const poll = setInterval(() => loadMessages(activeRoom), 3000);
    return () => clearInterval(poll);
  }, [activeRoom, privateKey, me]); // eslint-disable-line react-hooks/exhaustive-deps

  const getOtherUserFromRoom = (room) => {
    if (!me) return null;
    if (room.doctorId?._id === me._id) return room.patientId;
    return room.doctorId;
  };

  const startChat = async (otherUser) => {
    try {
      const { data } = await axios.post(
        `${API}/secure-chat/rooms`,
        { otherUserId: otherUser._id },
        { withCredentials: true }
      );
      await fetchRooms();
      setActiveRoom(data.room);
    } catch (e) {
      setError(e.response?.data?.message || "Failed to create chat room.");
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!draft.trim() || !activeRoom || !me) return;

    const other = getOtherUserFromRoom(activeRoom);
    if (!other?.encryptionPublicKey || !me.encryptionPublicKey) {
      setError(
        "Encryption keys are missing. Ask both users to refresh and login again."
      );
      return;
    }

    try {
      setLoading(true);
      const doctorPublic = await importPublicKey(activeRoom.doctorId.encryptionPublicKey);
      const patientPublic = await importPublicKey(
        activeRoom.patientId.encryptionPublicKey
      );

      const encryptedForDoctor = await encryptText(draft.trim(), doctorPublic);
      const encryptedForPatient = await encryptText(draft.trim(), patientPublic);

      await axios.post(
        `${API}/secure-chat/messages`,
        {
          roomId: activeRoom._id,
          encryptedForDoctor,
          encryptedForPatient
        },
        { withCredentials: true }
      );

      setDraft("");
      await loadMessages(activeRoom);
    } catch (e) {
      setError("Failed to send encrypted message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Secure Doctor-Patient Chat</h3>
        {me && (
          <span className="badge bg-primary">
            Logged in as {me.fullName} ({me.role})
          </span>
        )}
      </div>

      <p className="text-muted small">
        Messages are encrypted in your browser before upload. Server stores only
        ciphertext.
      </p>

      {error && <div className="alert alert-warning">{error}</div>}

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h6>{myRoleIsDoctor ? "Patients" : "Doctors"}</h6>
              <div className="d-flex flex-column gap-2">
                {directory.map((u) => (
                  <button
                    key={u._id}
                    className="btn btn-outline-primary btn-sm text-start"
                    onClick={() => startChat(u)}
                  >
                    {u.fullName}
                  </button>
                ))}
              </div>
              <hr />
              <h6>Active Rooms</h6>
              <div className="d-flex flex-column gap-2">
                {rooms.map((room) => {
                  const other = getOtherUserFromRoom(room);
                  return (
                    <button
                      key={room._id}
                      className={`btn btn-sm text-start ${
                        activeRoom?._id === room._id
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setActiveRoom(room)}
                    >
                      {other?.fullName || "Unknown user"}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card h-100">
            <div className="card-body d-flex flex-column" style={{ minHeight: 520 }}>
              <div className="flex-grow-1 overflow-auto border rounded p-3 bg-light">
                {messages.map((msg) => (
                  <div key={msg._id} className="mb-2">
                    <div className="small text-muted">
                      {msg.senderId === me?._id ? "You" : "Other"} -{" "}
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                    <div className="p-2 bg-white rounded border">{msg.plainText}</div>
                  </div>
                ))}
                {!messages.length && (
                  <p className="text-muted mb-0">No messages yet. Start securely chatting.</p>
                )}
              </div>
              <form onSubmit={sendMessage} className="mt-3 d-flex gap-2">
                <input
                  className="form-control"
                  placeholder="Type an encrypted message..."
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecureChatPage;

