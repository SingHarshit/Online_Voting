# Online Voting System

## 📝 Overview
The **Online Voting System** is a secure and interactive web-based application that allows users to cast their votes digitally. The system ensures security with **Two-Factor Authentication (2FA)**, real-time voting results, and an engaging user interface.

## 🚀 Features
- **Secure Voting** – Users can vote securely using their credentials and 2FA verification.
- **Two-Factor Authentication** – Email-based OTP verification using **Nodemailer**.
- **JWT Authentication** – Secure login and session management.
- **Real-Time Voting Results** – Users can view live election updates.
- **Interactive UI** – Built with **React.js** for a seamless user experience.
- **Admin Panel** – Manage candidates and oversee voting processes.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Nodemailer (for 2FA OTP verification)
- **State Management:** Redux (optional)

## 📜 Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your system.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/online-voting-system.git
cd online-voting-system
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the **backend** directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 4️⃣ Run the Application
#### Start Backend Server
```sh
cd backend
npm start
```
#### Start Frontend Server
```sh
cd frontend
npm start
```

### 5️⃣ Access the Application
Open your browser and go to:
```
http://localhost:3000
```

## 🔐 Security Measures
- **Password Hashing** – User passwords are securely stored using **bcrypt**.
- **JWT Tokens** – Used for secure authentication and authorization.
- **Email Verification** – A one-time password (OTP) is sent for 2FA.

## 🎯 Future Enhancements
- Implement Blockchain-based voting for additional security.
- Add biometric authentication.
- Mobile app support.

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. All contributions are welcome!

---
Happy Voting! 🗳️

