# Student Mental Health Support Platform

A web platform designed to help students track their mental health, share experiences anonymously, and access supportive resources.

This project includes:

* Mental health assessment quiz
* User dashboard with test history
* Community feed for sharing experiences
* Review system
* MongoDB database integration

---

# Tech Stack

Frontend

* React.js
* Bootstrap
* Axios

Backend

* Node.js
* Express.js

Database

* MongoDB Atlas
* Mongoose

---

# Project Structure

```
project-root
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Setup Instructions

Follow these steps to run the project locally.

## 1. Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 2. Install Backend Dependencies

```
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

Open a new terminal and run:

```
cd frontend
npm install
```

---

# Environment Variables

Create a `.env` file inside the **backend folder**.

Example:

```
MONGO_URL=your_mongodb_connection_string
PORT=8080
JWT_SECRET=your_secret_key
```

⚠️ Do not push `.env` file to GitHub.

---

# Running the Project

## Start Backend

```
cd backend
npm start
```

Server will run on:

```
http://localhost:8080
```

---

## Start Frontend

```
cd frontend
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# Features Implemented

User Authentication

* Signup and Login with JWT

Mental Health Assessment

* Quiz based emotional analysis
* Results stored in MongoDB

Dashboard

* Displays user assessment history

Community Feed

* Share stories anonymously
* Like and comment on posts

Review System

* Users can submit feedback
* Reviews stored in database

---

# Important Notes for Contributors

Before pushing code:

1. Pull latest changes

```
git pull origin branch-name
```

2. Create a new branch for your feature

```
git checkout -b feature-name
```

3. Commit changes

```
git add .
git commit -m "describe your changes"
```

4. Push your branch

```
git push origin feature-name
```

---

# Common Issues

MongoDB Not Connecting

* Check `.env` file
* Ensure MongoDB Atlas IP whitelist allows your IP

Dependencies Errors

* Run `npm install` in both frontend and backend folders

Port Already in Use

* Change port in `.env` or stop running servers

---

# Future Improvements

* Real-time community feed
* Stress trend charts
* Admin moderation panel
* Email notifications
* Mobile responsive improvements

---

# Contributors

Project developed by the team members of this repository.

---

# License

This project is for educational purposes.
