const express = require("express")
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const router = express.Router(); // api creation
const upload = multer({ storage: multer.memoryStorage()}) // form data ko read karne ke ise use karte hai ye temporary file ko main memory or ram me store karga as express cant read it so we use multer
router.post("/songs",upload.single("audio1"), async(req, res) =>{ // api name, method => POST
    // WORK is to upload
    // in upload.single("audio") audio is a string you name in req.body
    // file data comes in req.file
    // console.log(req.body, "file",req.file);
    const fileData = await uploadFile(req.file);
    console.log(fileData);
    
    res.status(201).json({
        message:"done"
    })
    

})

module.exports = router;