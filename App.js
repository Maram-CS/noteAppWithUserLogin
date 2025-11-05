import {config} from "dotenv";
import noteRouter from "./router/noteRouter.js";
import express from "express";
import userRouter from "./router/userRouter.js";
import appRouter from "./router/AppRouter.js";
import {join} from "path";
config();
const App = express();
const Port = process.env.PORT || 4000;
const dirname = import.meta.dirname;

App.use(express.json());
App.use(express.urlencoded({extended : true}));

App.use("/note",noteRouter);
App.use("/user",userRouter);
App.use("/App",appRouter);// ak wsalti hna bah diri res.render() fi router jdid

App.set("view engine","ejs");
App.set("views", join(dirname, "/view"));
App.use(express.static(join(dirname, "/public")));


App.listen (Port,()=> {
    console.log(`server is working on port ${Port}`);
});




