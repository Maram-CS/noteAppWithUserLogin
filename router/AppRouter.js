import {Router} from "express";

const appRouter = Router();

appRouter.get("/create",(req,res)=> {
    res.render("auth/addNote");
})

export default appRouter;