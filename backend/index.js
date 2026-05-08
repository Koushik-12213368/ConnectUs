require("dotenv").config();
const express = require("express");
app.set("trust proxy", 1);
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const url = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const allowedOrigins = frontendUrl
  .split(",")
  .map((url) => url.trim().replace(/\/$/, ""));
const AuthRoute = require("./routes/AuthRoute");
const AssesmentRoute = require("./routes/AssesmentRoute");
const ReviewRoute =require("./routes/ReviewRoute");
const PostRoute = require("./routes/PostRoute");
const ChatRoute = require("./routes/ChatRoute");
const SecureChatRoute = require("./routes/SecureChatRoute");
const DoctorVerificationRoute = require("./routes/DoctorVerificationRoute");

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(cookieParser());

app.use(cors({
  origin: [
    "https://connect-us-xi-nine.vercel.app"
  ],
  credentials: true
}));

app.options("*", cors());

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