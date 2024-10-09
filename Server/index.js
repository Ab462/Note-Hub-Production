import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import dotenv from "dotenv";
import cors from "cors";
import("./db.js");
dotenv.config();

const app = express();
const port = 8000;


// middlewares
app.use(cors({
  origin:"*",
  credentials:true
}));
app.use(express.json());

// Available Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
