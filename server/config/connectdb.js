// load environment
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
  }

const mongoose = require('mongoose'); 

async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL);
        // console.log("Hello DB connected!");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDB;