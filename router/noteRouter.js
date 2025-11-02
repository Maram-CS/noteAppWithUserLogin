import { Router } from "express";
import {AddNote,getANote,getAllNote,getNoteByTitle,updateNote,deleteNote} from "../controller/noteController.js";

const noteRouter = Router();
noteRouter.post("/addNote",AddNote);
noteRouter.get("/getNote/:id",getANote);
noteRouter.post("/getNoteByTitle",getNoteByTitle);
noteRouter.get("/getAll",getAllNote);
noteRouter.put("/updateNote/:id",updateNote);
noteRouter.delete("/deleteNote/:id",deleteNote);

export default noteRouter;


