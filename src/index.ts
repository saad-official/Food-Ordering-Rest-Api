import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import myUserRoute from "./routes/myUserRoute";
import { jwtCheck } from "./middleware/auth";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Database Connected Successfully"))

  .catch((err) => console.log(err));

app.use("/api/my/user", jwtCheck, myUserRoute);

app.listen(7000, () => {
  console.log("Server started on 7000");
});
