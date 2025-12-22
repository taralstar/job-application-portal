# Job Application Portal – Node.js REST API

A Job Application Portal built using **Node.js and Express.js** as part of a **Node.js Developer Intern selection process**.  
The application allows users to register, log in, view job listings, upload resumes, apply for jobs, and view their applications.

This project demonstrates core backend concepts such as REST APIs, JWT authentication, file uploads, MongoDB integration, and frontend–backend interaction.

---

## 🚀 Features

- User Registration and Login using JWT authentication
- View available job listings
- Upload resume (PDF) while applying for a job
- Apply for jobs
- View applied jobs (My Applications)
- User-specific application handling
- RESTful API design
- MongoDB data persistence

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Multer (for file uploads)

### Frontend
- HTML
- CSS
- Bootstrap
- Vanilla JavaScript

---

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


---

## ▶️ How to Run the Project Locally

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd job-application-portal
Install dependencies

npm install


Start the development server

npm run dev


Open the application in the browser

http://localhost:3000

🔐 API Endpoints
Authentication

POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT token

Jobs

GET /api/jobs – Fetch available jobs

Applications

POST /api/applications/:jobId – Apply for a job with resume upload

GET /api/applications/my – View applications of logged-in user

📄 Resume Upload

Resume uploads are handled using Multer

Uploaded files are stored in the /uploads directory

Only authenticated users can upload resumes

🧠 Design Decisions

JWT is used to secure API routes and identify users.

Applications are stored in MongoDB with references to users and jobs.

Frontend state is used to provide instant UI feedback after applying.

Backend persists all application data securely.

In a production-ready system, job filtering would be fully handled by backend queries.

🔮 Future Improvements

Move job filtering logic entirely to the backend

Add admin role to manage job postings

Improve resume validation and size limits

Add pagination for job listings

Deploy backend using cloud services (Render)