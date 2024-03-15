"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const schema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: [true, "Please enter Your UserName"]
    },
    email: {
        type: String,
        unique: [true, "Email already exista"],
        required: [true, "Please Enter Name"],
        validate: validator_1.default.default.isEmail,
    },
    enquiry: {
        type: String,
        required: [true, "Please enter your Enquiry"]
    },
    description: {
        type: String,
        required: [true, "Please Enter description"]
    }
}, {
    timestamps: true
});
exports.Contact = mongoose_1.default.model("Contact", schema);
