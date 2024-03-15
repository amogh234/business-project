"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newContact = void 0;
const error_1 = require("../middleware/error");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const contactModel_1 = require("../models/contactModel");
exports.newContact = (0, error_1.TryCatch)(async (req, res, next) => {
    const { userName, email, enquiry, description } = req.body;
    if (!userName || !email || !enquiry || !description) {
        return next(new ErrorHandler_1.default("Please Enter all the fields", 400));
    }
    await contactModel_1.Contact.create({
        userName,
        email,
        enquiry,
        description
    });
    return res.status(200).json({
        sucess: true,
        message: "User has created a new enquiry"
    });
});
