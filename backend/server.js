require("dotenv").config();
const app = require("./src/app")
const connectToDB = require("./src/db/db")
connectToDB();
app.get("/", (req, res)=>{
    res.send("hi")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})