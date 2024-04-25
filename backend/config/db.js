import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://linox999:XGhO6FlUhPS9FG5y@cluster0.cuelolk.mongodb.net/food-del').then(()=> console.log("DB Connected"))
}