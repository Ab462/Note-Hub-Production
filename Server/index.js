import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import dotenv from "dotenv";
import cors from "cors";
import("./db.js");
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Define CORS options
const corsOptions = {
    origin: 'https://note-hub-production-frontend.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow OPTIONS for preflight
    credentials: true, // If you're using cookies or Authorization headers
};

// Apply CORS middleware globally
app.use(cors(corsOptions));
app.use(express.json());

// Available Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);

// Handle preflight requests
app.options('*', cors(corsOptions));

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
