import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";

function Login() {

    const [loginType, setLoginType] = useState("user");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // =========================
    // HANDLE CHANGE
    // =========================

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : value
        }));

        if (errors[name]) {

            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));

        }

    };

    // =========================
    // VALIDATE FORM
    // =========================

    const validateForm = () => {

        const newErrors = {};

        if (!formData.email) {

            newErrors.email = "Email is required";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {

            newErrors.email = "Please enter a valid email";

        }

        if (!formData.password) {

            newErrors.password = "Password is required";

        }

        return newErrors;

    };

    // =========================
    // LOGIN SUBMIT
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {

            setIsLoading(true);

            try {

                const { data } = await axios.post(
                    apiUrl("/auth/login"),
                    {
                        email: formData.email,
                        password: formData.password,
                        loginAsDoctor: loginType === "doctor",
                        loginAsAdmin: loginType === "admin"
                    }
                );

                console.log("LOGIN RESPONSE:", data);

                if (data.success) {

                    // =========================
                    // STORE TOKEN
                    // =========================

                    localStorage.setItem(
                        "token",
                        data.token
                    );

                    // =========================
                    // STORE USER DATA
                    // =========================

                    localStorage.setItem(
                        "isLoggedIn",
                        "true"
                    );

                    localStorage.setItem(
                        "userName",
                        data.user.fullName
                    );

                    localStorage.setItem(
                        "userId",
                        data.user._id
                    );

                    localStorage.setItem(
                        "userRole",
                        data.user.role
                    );

                    localStorage.setItem(
                        "doctorVerificationStatus",
                        data.user.doctorVerificationStatus ||
                        "not_required"
                    );

                    localStorage.setItem(
                        "user",
                        JSON.stringify(data.user)
                    );

                    // =========================
                    // DEBUG
                    // =========================

                    console.log(
                        "TOKEN STORED:",
                        data.token
                    );

                    console.log(
                        "TOKEN FROM STORAGE:",
                        localStorage.getItem("token")
                    );

                    console.log(
                        "Stored User ID:",
                        data.user._id
                    );

                    alert("Login successful!");

                    // =========================
                    // ROLE CHECK
                    // =========================

                    const isDoctor =
                        data.user.role === "doctor" ||
                        data.user.role === "professional";

                    const doctorStatus =
                        data.user.doctorVerificationStatus;

                    const isAdmin =
                        data.user.role === "admin";

                    // =========================
                    // REDIRECT
                    // =========================

                    if (isAdmin) {

                        window.location.href =
                            "/admin-dashboard";

                    } else if (
                        isDoctor &&
                        doctorStatus !== "approved"
                    ) {

                        window.location.href =
                            "/doctor-verification";

                    } else {

                        window.location.href =
                            "/dashboard";

                    }

                }

            } catch (error) {

                console.log(
                    "LOGIN ERROR:",
                    error
                );

                alert(
                    error.response?.data?.message ||
                    "Login failed"
                );

            } finally {

                setIsLoading(false);

            }

        } else {

            setErrors(newErrors);

        }

    };

    // =========================
    // INPUT STYLE
    // =========================

    const inputStyle = {
        background: "rgba(255, 255, 255, 0.15)",
        color: "white",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        padding: "12px 16px"
    };

    return (

        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                fontFamily: "'Inter', sans-serif"
            }}
        >

            <div className="container">

                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-md-5 col-lg-4 col-xl-4">

                        <div
                            className="card border-0 p-4"
                            style={{
                                background:
                                    "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(20px)",
                                border:
                                    "1px solid rgba(255, 255, 255, 0.2)",
                                boxShadow:
                                    "0 8px 32px 0 rgba(0,0,0,0.2)",
                                borderRadius: "24px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="text-center mb-4">

                                    <div className="mb-3">

                                        <span
                                            style={{
                                                fontSize: "48px"
                                            }}
                                        >
                                            🧠
                                        </span>

                                    </div>

                                    <h2 className="fw-bold text-white mb-2">
                                        Welcome Back
                                    </h2>

                                    <p className="text-white opacity-75">
                                        Sign in to continue your journey
                                    </p>

                                </div>

                                {/* LOGIN TYPE */}

                                <div className="mb-4">

                                    <div
                                        className="d-flex"
                                        style={{
                                            borderRadius: "999px",
                                            overflow: "hidden",
                                            border:
                                                "1px solid rgba(255,255,255,0.25)",
                                            background:
                                                "rgba(255,255,255,0.08)",
                                            padding: "4px"
                                        }}
                                    >

                                        {[
                                            {
                                                key: "user",
                                                label: "User"
                                            },
                                            {
                                                key: "doctor",
                                                label: "Doctor"
                                            },
                                            {
                                                key: "admin",
                                                label: "Admin"
                                            }
                                        ].map((option) => {

                                            const selected =
                                                loginType === option.key;

                                            return (

                                                <button
                                                    key={option.key}
                                                    type="button"
                                                    onClick={() =>
                                                        setLoginType(
                                                            option.key
                                                        )
                                                    }
                                                    style={{
                                                        flex: 1,
                                                        borderRadius: "999px",
                                                        border: "none",
                                                        padding:
                                                            "12px 16px",
                                                        fontWeight: 700,
                                                        color: selected
                                                            ? "#ffffff"
                                                            : "rgba(255,255,255,0.85)",
                                                        background: selected
                                                            ? "linear-gradient(135deg, #667eea, #764ba2)"
                                                            : "rgba(255,255,255,0.05)"
                                                    }}
                                                >
                                                    {option.label}
                                                </button>

                                            );

                                        })}

                                    </div>

                                </div>

                                {/* FORM */}

                                <form onSubmit={handleSubmit}>

                                    {/* EMAIL */}

                                    <div className="mb-3">

                                        <label className="text-white small fw-semibold mb-1">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        />

                                        {errors.email && (
                                            <small className="text-danger">
                                                {errors.email}
                                            </small>
                                        )}

                                    </div>

                                    {/* PASSWORD */}

                                    <div className="mb-3">

                                        <label className="text-white small fw-semibold mb-1">
                                            Password
                                        </label>

                                        <div className="position-relative">

                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                className="form-control"
                                                placeholder="••••••••"
                                                value={formData.password}
                                                onChange={handleChange}
                                                style={inputStyle}
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                style={{
                                                    position: "absolute",
                                                    right: "12px",
                                                    top: "50%",
                                                    transform:
                                                        "translateY(-50%)",
                                                    background: "none",
                                                    border: "none",
                                                    color:
                                                        "rgba(255,255,255,0.6)"
                                                }}
                                            >
                                                <i
                                                    className={`fas ${
                                                        showPassword
                                                            ? "fa-eye-slash"
                                                            : "fa-eye"
                                                    }`}
                                                ></i>
                                            </button>

                                        </div>

                                        {errors.password && (
                                            <small className="text-danger">
                                                {errors.password}
                                            </small>
                                        )}

                                    </div>

                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="btn w-100 py-3 mb-3 fw-semibold"
                                        disabled={isLoading}
                                        style={{
                                            background:
                                                "linear-gradient(45deg, #667eea, #764ba2)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "10px"
                                        }}
                                    >

                                        {isLoading
                                            ? "Signing in..."
                                            : "Sign In"}

                                    </button>

                                    {/* SIGNUP */}

                                    <div className="text-center mt-4">

                                        <span className="text-white opacity-75">
                                            New to our community?
                                        </span>

                                        <a
                                            href="/signup"
                                            className="text-white fw-semibold ms-1"
                                        >
                                            Create account
                                        </a>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
export default Login;