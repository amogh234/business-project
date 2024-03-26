import express from "express";
import { connectDB } from "./utils/feature";
import { errorMiddleware } from "./middleware/error";
import morgan from "morgan";


// Routes

import contactRoute from "./routes/contactRoute.js"


const app = express();
app.use(express.json());
app.use(morgan("dev"));


// using routes
app.use("/api/v1/contact", contactRoute);

app.get("/", (req, res) => {
    res.send("working");
})

app.use(errorMiddleware);


connectDB();
app.listen(4000, () => {
    console.log("Server is working on port 4000");
})
