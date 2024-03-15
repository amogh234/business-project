"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feature_1 = require("./utils/feature");
const error_1 = require("./middleware/error");
const morgan_1 = __importDefault(require("morgan"));
// Routes
const contactRoute_js_1 = __importDefault(require("./routes/contactRoute.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// using routes
app.use("/api/v1/contact", contactRoute_js_1.default);
app.get("/", (req, res) => {
    res.send("working");
});
app.use(error_1.errorMiddleware);
(0, feature_1.connectDB)();
app.listen(4000, () => {
    console.log("Server is working on port 4000");
});
