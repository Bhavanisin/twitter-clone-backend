import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//define route
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";





const app = express();
//database connection
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connect to mongodb database");
    }).catch((error) => {
        throw error;
    });

};
//path route
app.use(cookiesParser());
app.use(express.json());
app.use('/api/users', userRoutes);


app.listen(4000, ()=>{
    connect();
    console.log("listening on port no 4000");
})
 