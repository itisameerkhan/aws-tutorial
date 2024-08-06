import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";
import postRouter from "./routers/postRouter.js";
import connectDB from "./config/mongoose.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
connectDB();

app.listen(process.env.PORT, () => {
  console.log("SERVER IS LISTENING TO PORT: ", process.env.PORT);
});

app.use("/api", postRouter);

app.use(errorHandler);
