import { Schema,model } from "mongoose";

const modelSchema = new Schema ({
    Title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }, 
    user : {
        type : Schema.Types.ObjectId,
        ref : 'userModel',
        required: false,
    }
},{timestamps:true});

const noteModel = model('noteModel',modelSchema);
export default noteModel;

