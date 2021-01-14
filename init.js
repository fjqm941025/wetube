import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT;

const handleListening = () => console.log(`Listening on ${PORT}`);

app.listen(PORT, handleListening);
