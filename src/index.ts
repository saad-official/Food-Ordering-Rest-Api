import  express, {Response, Request}  from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose"
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Database Connected Successfully ss"))

  .catch((err) => console.log(err));



app.get("/test", (req:Request, res:Response) => {
    res.json({message:"Hello World!"})
});


app.listen(7000, () => {
    console.log("Server started on 7000")
})