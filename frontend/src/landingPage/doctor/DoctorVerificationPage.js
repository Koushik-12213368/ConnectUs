import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";

const STATUS_META = {
  not_submitted: { label: "Not Submitted", color: "secondary", progress: 20 },
  pending: { label: "Pending Admin Review", color: "warning", progress: 60 },
  approved: { label: "Approved", color: "success", progress: 100 },
  rejected: { label: "Rejected", color: "danger", progress: 100 },
  not_required: { label: "Not Required", color: "info", progress: 100 }
};

function DoctorVerificationPage() {
  const [user, setUser] = useState(null);
  const [verification, setVerification] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const statusKey = user?.doctorVerificationStatus || "not_submitted";
  const status = STATUS_META[statusKey] || STATUS_META.not_submitted;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(apiUrl("/auth/me"), {
          withCredentials: true
        });
        setUser(data.user);
      } catch (e) {
        setError("Please login first.");
      }
    })();
  }, []);

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const { data } = await axios.get(apiUrl("/doctor-verification/my"), {
          withCredentials: true
        });
        setVerification(data.verification || null);
      } catch (e) {
        // ignore
      }
    })();
  }, [user]);

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve({
          name: file.name,
          mimeType: file.type || "application/octet-stream",
          size: file.size,
          dataUrl: reader.result
        });
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmitDocuments = async () => {
    try {
      setError("");
      setSuccess("");
      if (!files.length) {
        setError("Please select at least one certificate/document.");
        return;
      }
      if (files.length > 5) {
        setError("Please upload no more than 5 documents.");
        return;
      }

      const maxFileSize = 5 * 1024 * 1024; // 5MB per file
      const oversized = files.find((file) => file.size > maxFileSize);
      if (oversized) {
        setError(`File ${oversized.name} is too large. Please upload files smaller than 5MB.`);
        return;
      }

      setLoading(true);
      const docs = await Promise.all(files.map((file) => fileToDataUrl(file)));
      const { data } = await axios.post(
        apiUrl("/doctor-verification/submit"),
        { documents: docs },
        { withCredentials: true }
      );
      setUser(data.user);
      setVerification(data.verification);
      setSuccess("Documents uploaded successfully. Status is now pending.");
      setFiles([]);
    } catch (e) {
      setError(e.response?.data?.message || "Failed to upload documents.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2">Doctor Verification Center</h2>
              <p className="text-muted mb-4">
                Submit your professional proofs for admin review to unlock full
                doctor access.
              </p>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="mb-3 d-flex justify-content-between align-items-center">
                <span className="fw-semibold">Verification Status</span>
                <span className={`badge bg-${status.color}`}>{status.label}</span>
              </div>
              <div className="progress mb-4" style={{ height: 12 }}>
                <div
                  className={`progress-bar bg-${status.color}`}
                  role="progressbar"
                  style={{ width: `${status.progress}%` }}
                />
              </div>

              <div className="bg-light rounded-3 p-3 mb-3">
                <h6 className="mb-2">What to upload</h6>
                <ul className="mb-0">
                  <li>Medical degree / registration certificate</li>
                  <li>Government ID (masked where needed)</li>
                  <li>Current hospital or clinic affiliation proof</li>
                </ul>
              </div>

              {verification?.adminNotes ? (
                <div className="alert alert-secondary mb-3">
                  <strong>Admin note:</strong> {verification.adminNotes}
                </div>
              ) : null}

              <div className="mb-3">
                <label className="form-label fw-semibold">Upload certificates/documents</label>
                <input
                  type="file"
                  className="form-control"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onChange={(e) => setFiles(Array.from(e.target.files || []))}
                  disabled={statusKey === "approved" || loading}
                />
                <div className="form-text">
                  You can upload up to 5 files in PDF/JPG/PNG formats.
                </div>
              </div>

              <div className="d-flex gap-2 flex-wrap">
                {statusKey === "approved" ? (
                  <div className="alert alert-success mb-0 py-2">
                    Your verification is approved. No further action needed.
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmitDocuments}
                    disabled={loading}
                  >
                    {loading
                      ? "Uploading..."
                      : "Upload documents for verification"}
                  </button>
                )}
              </div>

              <p className="text-muted small mt-4 mb-0">
                Admin will review your documents and update your status. Until
                approval, this page will show pending status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorVerificationPage;

