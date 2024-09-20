import dotenv from "dotenv";

import express from "express";
import connectDB from "./db/database.js";

const app = express();

dotenv.config({
    path:'/.env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error: ", err);
})




/*
// try to place semicolon ; before the iffy block to avoid any issues
// database connection
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error", error);
        throw err
    }
})()
*/