import mongoose, { connections } from "mongoose"

export const ConnectDB = async()=>{
    await mongoose.connect("mongodb+srv://Srikanthbolle:AGwzsGhlDFJEinyx@cluster0.5adw1c9.mongodb.net/blogger")
    console.log('Db connected sucessfully')
}