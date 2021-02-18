import "./db";
import dotenv from "dotenv";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => console.log(`Listening on ${PORT}`);

app.listen(PORT, handleListening);
