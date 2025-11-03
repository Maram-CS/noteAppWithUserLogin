import { config } from "dotenv";
import noteModel from "../model/noteModel.js";
import configDb from "../configDB/noteConfig.js";
import userModel from "../model/userModel.js";

config();
configDb(process.env.NAME_DB || "note");

const AddNote = async (req,res,next) => {
    try {
        const note = new noteModel(req.body);
        const newNote = await note.save();
        if(newNote) {
            res.status(200).json({newNote,message:"your note added successfully"});
        }else {
            res.status(405).json({message:"you have an error some where try again"});
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getAllNote = async (req,res,next) => {
    try {
        const note = await noteModel.find({});
        if(note) {
            res.status(200).json({note,message:"you received the note successfully "});
        }else {
            res.status(405).json({message:"failed operation try again "});
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getANote = async (req,res,next) => {
    try {
        const note = await noteModel.findById(req.params.id);
        if(note) {
            res.status(200).json({note,message:"you received the note successfully "});
        }
        else {
             res.status(405).json({message:"failed operation try again "});
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getNoteByTitle = async (req,res,next) => {
    try {
      const {Title} = req.body;
      const note = await noteModel.findOne({Title});
      if(note) {
        res.status(200).json({note,message:"you received the note successfully "});
      }else {
        res.status(405).json({message:"failed operation try again "});
      }
      next();
    }catch(err) {
        console.error(err);
    }
}

const updateNote = async (req,res,next) => {
    try {
        const note = await noteModel.findByIdAndUpdate(req.params.id,req.body);
        if(note) {
        res.status(200).json({note,message:"your update success "});
      }else {
        res.status(405).json({message:"failed operation try again "});
      }
      next();
    }catch(err) {
        console.error(err);
    }
}

const deleteNote = async (req,res,next) => {
    try {
        const {Title} = req.body;
        const note = await noteModel.findOne({Title});
        if(note) {
        const deletedNote = await noteModel.findByIdAndDelete(note._id);
        res.status(200).json({note,message:"your delete success "});
      }else {
        res.status(405).json({message:"failed operation try again "});
      }
      next();
    }catch(err) {
        console.error(err);
    }
    
}

export {AddNote,getANote,getAllNote,getNoteByTitle,updateNote,deleteNote};