import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import dotenv from "dotenv";
import cors from "cors";
import("./db.js");
dotenv.config();

const app = express();
const port = 8000;


const corsOptions = {
    origin: 'https://note-hub-production-frontend.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // If you want to allow cookies or authentication headers
};

// Apply CORS middleware
app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.get("/",(req,res)=>{
  res.status(200).send("Hello")
})


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
