import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function DoctorAccessGuard({ children }) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("userRole");
  const verificationStatus = localStorage.getItem("doctorVerificationStatus");

  const isDoctor = role === "doctor" || role === "professional";
  const isApproved = verificationStatus === "approved";
  const protectedDoctorPaths = ["/dashboard", "/secure-chat"];

  // Keep landing and public pages open for everyone.
  // Only restrict protected doctor areas until verification is approved.
  if (
    isLoggedIn &&
    isDoctor &&
    !isApproved &&
    protectedDoctorPaths.includes(location.pathname)
  ) {
    return <Navigate to="/doctor-verification" replace />;
  }

  return children;
}

export default DoctorAccessGuard;

