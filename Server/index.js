import express from "express";
import auth from "./routes/auth.js";  // Ensure this path is correct
import notes from "./routes/notes.js"; // Ensure this path is correct
import dotenv from "dotenv";
import cors from "cors";
import("./db.js");
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: 'https://note-hub-production-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, 
};

// Apply CORS middleware globally
app.use(cors(corsOptions));
app.use(express.json());

// Available Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);

// Test route
app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
