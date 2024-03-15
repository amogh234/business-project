import mongoose from "mongoose";
export const connectDB = () => {

    mongoose
        .connect("mongodb://localhost:27017", {
            dbName: "business_website",
        })
        .then((c) => console.log(`db is now  to ${c.connection.host}`))
        .catch((e) => console.log(e));
};

