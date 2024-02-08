import mongoose from "mongoose";
export default async function connectMongodb() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    }
    catch(err){
        console.log("error in connecting mongodb "+err);
    }
}