import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    number: Boolean,

}, { timestamps: true })

export const userd = mongoose.model("userd", userSchema)
