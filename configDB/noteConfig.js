import {connect} from 'mongoose';

const configDb = async (name_DB) => {
    try {
        await connect (`mongodb://localhost:27017/${name_DB}`);
        console.log(`database is connecting as ${name_DB}`);
    }catch(err) {
        console.error(err);
    }
} 

export default configDb;