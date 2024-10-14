import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import authRoute from "./routes/UserRoute.js";
import reportRoute from "./routes/reportRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To PICT books");
});

app.use("/books", booksRoute);
app.use("/auth", authRoute);
app.use("/report", reportRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
