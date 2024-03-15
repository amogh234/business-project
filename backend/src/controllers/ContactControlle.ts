import { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middleware/error";


import { NewContactRequestBody } from "../types/types.js"
import ErrorHandler from "../utils/ErrorHandler";
import { Contact } from "../models/contactModel";


export const newContact = TryCatch(
    async (
        req: Request<{}, {}, NewContactRequestBody>,
        res: Response,
        next: NextFunction,
    ) => {
        const { userName, email, enquiry, description } = req.body;
        if (!userName || !email || !enquiry || !description) {
            return next(new ErrorHandler("Please Enter all the fields", 400));
        }
        await Contact.create({
            userName,
            email,
            enquiry,
            description
        })


        return res.status(200).json({
            sucess: true,
            message: "User has created a new enquiry"
        })
    }
)
