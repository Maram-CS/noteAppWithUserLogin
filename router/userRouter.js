import {Router} from "express";
import {addUser,getAllUsers,getUser,updateUser,deleteUser,loginUser} from "../controller/userController.js";
const userRouter = Router();

userRouter.post("/addUser",addUser);
userRouter.get("/getAll",getAllUsers);
userRouter.get("/getUser/:id",getUser);
userRouter.put("/update/:id",updateUser);
userRouter.delete("/delete/:id",deleteUser);
userRouter.post("/login",loginUser);

export default userRouter;