import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

const databaseName = "MovieTicket_Website";

mongoose
  .connect(
    `mongodb+srv://trongnghia:${process.env.MONGODB_PASSWORD}@cluster0.byi93hs.mongodb.net/${databaseName}?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log(
        "Connected To Database And Server is running"
      )
    )
  )
  .catch((e) => console.log(e));