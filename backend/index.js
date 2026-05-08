require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const url = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const AuthRoute = require("./routes/AuthRoute");
const AssesmentRoute = require("./routes/AssesmentRoute");
const ReviewRoute =require("./routes/ReviewRoute");
const PostRoute = require("./routes/PostRoute");
const ChatRoute = require("./routes/ChatRoute");
const SecureChatRoute = require("./routes/SecureChatRoute");
const DoctorVerificationRoute = require("./routes/DoctorVerificationRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

// Routes: 

app.use("/auth", AuthRoute);
app.use("/assesment",AssesmentRoute);
app.use("/review",ReviewRoute);
app.use("/post", PostRoute);
app.use("/chat", ChatRoute);
app.use("/secure-chat", SecureChatRoute);
app.use("/doctor-verification", DoctorVerificationRoute);

// Mongo connection: 

mongoose.connect(url, {
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
     console.log("✅ Database Connected Successfully!");
})
.catch((err) => {
    console.log("Database Connection Error:", err);
});


// Server 

app.listen(PORT, () => {
    console.log(`🚀 Server Started on port ${PORT}`);
});