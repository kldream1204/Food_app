import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
    process.env.MONGODB,
    {
        useNewUrlParser:true,
      	useFindAndModify:false
    }
);

const db = mongoose.connection;

const handlelOpen = () => console.log("Connected to DB!");
const handleError = () => console.log("ERROR");

db.once("open", handlelOpen);
db.on("error", handleError);