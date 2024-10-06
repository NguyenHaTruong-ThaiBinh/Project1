import User from "../models/user";
import { registerSchema } from "../schemas/auth";

export const signup = async (req,res)=>{
    const {email,password} = req.body;
    const {error} = registerSchema.validate(req.body,{abortEarly: false});
    if(error){
        const messages = error.details.map((message) => message.message)
        return res.status(400).json({
            messages,
        })
    }

   const existUser = await User.findOne({email});
    if (existUser){
        return res.status(400).json({
            messages:["Email da ton tai"]
        });
    }
    const user =await User.create({
        email,
        password,
    })
    user.password=undefined;
    return res.status(201).json({
        email
    })
    
}

export const getuser = async (req, res) => {
    try {
        const data = await User.find();
        if (data.length <= 0) {
            return res.status(404).json({ message: "No product found" });
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getuserById = async (req, res) => {
    const { email } = req.params;
    try {
        const data = await User.findOne({ email: email });
        if (data.length <= 0) {
            return res.status(404).json({ message: "No product found" });
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
