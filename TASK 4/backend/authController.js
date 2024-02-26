
import userModel from "./model/userModel.js"
import bcrypt from "bcryptjs";
import generateToken from "./generateRoken.js";
let userName="",userEmail="";
export const login = async (req, res) => {
    const {email,password}=req.body;
    console.log("email=",email,"password=",password)

    try {
        const user= await userModel.findOne({email});
        userName=user.name;
        userEmail=user.email;
        
        if(!user){
            return res.status(400).json({message:"User does not exists",success:false})
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials",success:false})
        }
        else{
            const token=generateToken();
            console.log("token=",token)
            return res.status(200).json({message:"User logged in Successfully",success:true,token:token})
            
        }
    } catch (error) {
        console.log("error while logging in",error)
    }
}
export const register = async (req, res) => {
   const {name,email,password,confirmpassword}=req.body;
   try {
    const user= await userModel.findOne({email});
    userName=name;
    userEmail=name;
    console.log("user error=",user)

    if(user){
        console.log("User already exists")
        return res.status(400).json({message:"User already exists"});
        
    }
    //hashing password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log("hassed pawssword",hashedPassword)
    const newUser=new userModel({
        name,
        email,
        password:hashedPassword,
    })

    if(newUser){
           await newUser.save();
          const token=generateToken();
           res.status(201).json({message:"User registered successfully",token:token,success:true})
           console.log("user Created Succesfully")
        }
        else{
            res.status(500).json({message:"Failed to register"})
        }
        
   } catch (error) {
    console.log("error while registering user",error)
    
   }
}

export const home = async (req, res) => {
     
    return res.status(200).json({message:"Welcome to Home page",name:userName,email:userEmail})
}