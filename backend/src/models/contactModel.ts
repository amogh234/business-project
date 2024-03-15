import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter Your UserName"]
        },
        email: {
            type: String,
            unique: [true, "Email already exista"],
            required: [true, "Please Enter Name"],
            validate: validator.default.isEmail,
        },
        enquiry: {
            type: String,
            required: [true, "Please enter your Enquiry"]
        },
        description: {
            type: String,
            required: [true, "Please Enter description"]
        }
    },
    {
        timestamps: true
    }
);

export const Contact = mongoose.model("Contact", schema);



