import {config} from "dotenv";
import noteRouter from "./router/noteRouter.js";
import express from "express";

config();
const App = express();
const Port = process.env.PORT || 4000;

App.use(express.json());
App.use(express.urlencoded({extended : true}));

App.use("/note",noteRouter);

App.listen (Port,()=> {
    console.log(`server is working on port ${Port}`);
});
    



