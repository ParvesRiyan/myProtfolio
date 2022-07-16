import express from "express";
import cookieParser from "cookie-parser";
export const app = express();

app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb"}));
app.use(cookieParser());

import { UserRouter } from "./routes/user.js"

app.use("/api/v1",  UserRouter);