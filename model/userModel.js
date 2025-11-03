import bcrypt from "bcryptjs";
import {Schema,model} from "mongoose";

const userSchema = new Schema({
    name: {
        type : String,
        required : false,
    },
    email: {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
},{timeseries:true});

userSchema.pre("save",function(next) {
    const user = this;
    try {
        if(!user.isModified("password")) {
            next();
        }else {
        bcrypt.genSalt(10,(err,salt)=> {
            if(err) {
                next();
            }
            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err) {
                    next();
                }
                user.password = hash;
                next();
            })
    })}
    } catch(err) {
            console.error(err);
        }
            })

 userSchema.statics.login = async function(email,password) {
    const model = this;
    const user = await model.findOne({email});
    if(user) {
        try {
            const isUser = await bcrypt.compare(password,user.password);
                if(isUser) {
                    console.log("you are logged in ");
                    return user;
                }else {
                    console.log ("your password is wrong");
                }
            }catch(err) {
            console.error(err);
        }
    }else {
        throw Error ("this user not exist");
    }
}

const userModel = model("userModel",userSchema);
export default userModel;