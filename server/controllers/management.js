import mongoose from 'mongoose';
import Users from "../models/User.js"

export const getAdmins = async(req,res)=>{
    try{
        const admins= await Users.find({role:"admin"}).select("*-password");
        res.status(200).json(admins)
    }catch(error){
        res.send(404).json({message:error.message})
    }
}