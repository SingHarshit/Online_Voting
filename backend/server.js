require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer"); // ✅ Import Nodemailer

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ More secure CORS settings

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("DB connection error:", err));

// Schema and Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  mobile: String,
  aadhaar: String,
  password: String,
  isVerified: { type: Boolean, default: false },
  otp: String,  // ✅ Store OTP in DB
  otpExpires: Date, // ✅ Expiration time
});

const User = mongoose.model("User", UserSchema);

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET || "voters";

// Register User
app.post("/register", async (req, res) => {
  const { name, email, mobile, aadhaar, password } = req.body;

  if (!name || !email || !mobile || !aadhaar || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already in use." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, mobile, aadhaar, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User with JWT
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email first." });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// Middleware to Protect Routes
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Access denied." });

  try {
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

// ✅ Nodemailer Transporter Setup
// Looking to send emails in production? Check out our Email API/SMTP product!
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9a51389b37ce7e",
    pass: "65f52f5c7ce280"
  }
});
// ✅ Send OTP Route
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.isVerified) return res.status(400).json({ message: "Email already verified" });

    // ✅ Generate and Store OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    await User.updateOne({ email }, { otp, otpExpires });

    // ✅ Send OTP via Email
    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Email Verification OTP",
      text: `Your OTP is: ${otp}. It expires in 5 minutes.`,
    });

    res.json({ message: "OTP sent to your email." });

  } catch (error) {
    res.status(500).json({ message: "Error sending OTP", error });
  }
});

// ✅ Verify OTP Route
app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !user.otp || user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP or expired" });
    }

    if (Date.now() > user.otpExpires) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // ✅ Mark user as verified
    await User.updateOne({ email }, { isVerified: true, otp: null, otpExpires: null });

    res.json({ message: "Email verified successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP", error });
  }
});

// ✅ Protected Route Example
app.get("/home", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, this is your dashboard!` });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
