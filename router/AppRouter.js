import {Router} from "express";

const appRouter = Router();

appRouter.get("/note",(req,res)=> {
    res.render("auth/note");
})
appRouter.get("/addNote",(req,res)=> {
    res.render("auth/addNote");
})
appRouter.get("/AllNote",(req,res)=> {
    res.render("auth/AllNotes");
})
appRouter.get("/getANote",(req,res)=> {
    res.render("auth/getANote");
})
appRouter.get("/delete",(req,res)=> {
    res.render("auth/deleteANote");
})
export default appRouter;