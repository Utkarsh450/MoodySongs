const mongoose = require("mongoose")
const connectToDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to db");
        
    })
    .catch(()=>{
console.log("DB URI:", process.env.MONGO_URI);
        
    })
}
module.exports = connectToDB;