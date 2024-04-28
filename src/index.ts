import  express, {Response, Request}  from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/test", (req:Request, res:Response) => {
    res.json({message:"Hello World!"})
});


app.listen(7000, () => {
    console.log("Server started on 7000")
})