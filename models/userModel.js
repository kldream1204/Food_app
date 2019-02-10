import mongoose from "mongoose";
import passport from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    ID:String,
    name:String,
    avatarUrl:String,
    restaurants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "res"
        }
    ]
});

userSchema.plugin(passport, {usernameField: "ID"});

const model = mongoose.model("user", userSchema);

export default model;