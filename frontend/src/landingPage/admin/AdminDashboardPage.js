import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";

function AdminDashboardPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notesById, setNotesById] = useState({});
  const [loadingId, setLoadingId] = useState("");

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  const loadItems = async () => {
    try {
      setError("");
      setSuccess("");
      const { data } = await axios.get(apiUrl("/doctor-verification/admin/list"), {
        withCredentials: true
      });
      setItems(data.items || []);
    } catch (e) {
      const status = e.response?.status;
      const message = e.response?.data?.message;
      if (status === 401) {
        setError("Session expired. Please log in again as an admin.");
        redirectToLogin();
        return;
      }
      if (status === 403) {
        setError(message || "Admin access required.");
        return;
      }
      setError(message || "Failed to load verification submissions.");
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const review = async (id, status) => {
    try {
      setError("");
      setSuccess("");
      setLoadingId(id + status);
      await axios.patch(
        apiUrl(`/doctor-verification/admin/${id}/review`),
        {
          status,
          adminNotes: notesById[id] || ""
        },
        { withCredentials: true }
      );
      setSuccess(`Doctor has been ${status === "approved" ? "approved" : "rejected"}.`);
      await loadItems();
    } catch (e) {
      const status = e.response?.status;
      const message = e.response?.data?.message;
      if (status === 401) {
        setError("Session expired. Please log in again as an admin.");
        redirectToLogin();
        return;
      }
      if (status === 403) {
        setError(message || "Admin access required.");
        return;
      }
      setError(message || "Failed to update status.");
    } finally {
      setLoadingId("");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Admin - Doctor Verification</h2>
      <p className="text-muted">Review uploaded certificates and approve or reject doctors.</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="row g-3">
        {items.map((item) => (
          <div key={item._id} className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div>
                    <h5 className="mb-1">{item.doctorId?.fullName || "Unknown doctor"}</h5>
                    <div className="text-muted small">{item.doctorId?.email}</div>
                    <div className="small mt-1">
                      Current status: <span className="badge bg-secondary">{item.status}</span>
                    </div>
                  </div>
                  <div className="small text-muted">
                    Submitted: {new Date(item.updatedAt).toLocaleString()}
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="mb-2">Uploaded Documents</h6>
                  {(item.documents && item.documents.length > 0) ? (
                    <ul className="mb-2">
                      {item.documents.map((doc, idx) => (
                        <li key={`${item._id}-${idx}`}>
                          <a href={doc.dataUrl} target="_blank" rel="noreferrer">
                            {doc.name}
                          </a>{" "}
                          <span className="text-muted small">({Math.round(doc.size / 1024)} KB)</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-muted small mb-2">
                      No documents uploaded yet. Doctor should upload verification
                      documents from their verification page.
                    </div>
                  )}
                </div>

                <div className="mt-2">
                  <label className="form-label small fw-semibold">Admin notes</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={notesById[item._id] ?? item.adminNotes ?? ""}
                    onChange={(e) =>
                      setNotesById((prev) => ({ ...prev, [item._id]: e.target.value }))
                    }
                  />
                </div>

                <div className="mt-3 d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => review(item._id, "approved")}
                    disabled={loadingId === item._id + "approved"}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => review(item._id, "rejected")}
                    disabled={loadingId === item._id + "rejected"}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!items.length && <p className="text-muted">No submissions yet.</p>}
      </div>
    </div>
  );
}

export default AdminDashboardPage;

