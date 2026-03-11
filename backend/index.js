require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const url = process.env.MONGO_URL;
const AuthRoute = require("./routes/AuthRoute");
const AssesmentRoute = require("./routes/AssesmentRoute");
const ReviewRoute =require("./routes/ReviewRoute");
const PostRoute = require("./routes/PostRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes: 

app.use("/auth", AuthRoute);
app.use("/assesment",AssesmentRoute);
app.use("/review",ReviewRoute);
app.use("/post", PostRoute);

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

app.listen(8080, () => {
    console.log("🚀 Server Started on port 8080");
});