import express from  "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import route from "./routes/userRoutes.js";
import jwtRoutes from "./routes/jwtRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    })
})
.catch((error) => console.log(error));

app.use("/api/Books", route);
app.use("/api/users", jwtRoutes);