import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
}, { timestamps: true })

export const formData = mongoose.model("formData", formSchema)