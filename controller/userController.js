import userModel from "../model/userModel.js";


const addUser = async (req,res,next) => {
    try {
        const user = new userModel(req.body);
        const newUser = await user.save();
        if(newUser) {
            res.status(200).json({newUser,message : "the user added successfully"});
        }else {
            res.status(405).json({message : "you have a mistake some where try again"});
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getAllUsers = async (req,res,next) => {
    try {
        const AllUsers = await userModel.find({});
        if(AllUsers) {
            res.status(200).json({AllUsers,message:"AllUsers are here"});
        }else {
            res.status(405).json("you have an error some where try again");
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getUser = async (req,res,next) => {
    try {
        const user = await userModel.findById(req.params.id);
        if(user) {
             res.status(200).json({user,message:"AllUsers are here"});
        }else {
            res.status(405).json("this user doesn't exist");
        }
         next();
    }catch(err) {
        console.error(err);
    }
}

const updateUser = async (req,res,next) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body);
         if(user) {
             res.status(200).json({user,message:"updated"});
        }else {
            res.status(405).json("you have an error some where try again");
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const deleteUser = async (req,res,next) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
         if(user) {
             res.status(200).json({user,message:"AllUsers are here"});
        }else {
            res.status(405).json("you have an error some where try again");
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

export {addUser,getAllUsers,getUser,updateUser,deleteUser};