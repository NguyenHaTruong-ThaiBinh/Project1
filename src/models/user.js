import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
        email: {
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            minlength: 8,
        }
    },
    {timestamps: true, versionKey: false }
);
userSchema.index({email : 1})
export default mongoose.model("User",userSchema);