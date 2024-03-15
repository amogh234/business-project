import express from "express";
import { newContact } from "../controllers/ContactControlle";


const app = express.Router();

app.post("/newContact", newContact);


export default app;
