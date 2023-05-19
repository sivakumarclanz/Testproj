const logger = require("../helpers/logger");
const { imagefield } = require("../models");
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        cb(null, file.originalname);   
    }
 });

 const upload = multer({ storage: Storage }).array('testImage',4);


  const up = async (req, res) => {
    upload(req,res,(err)=>{
     if(err){
        console.log(err)
     }   
     else{
        const newImage = new imagefield({
            name: req.body.name,
            image:{
                data: req.files.filename,
                contentType: "image/png",
            },
        })
        newImage.save()
        .then(()=>res.send('sucessfully uploaded')).catch(err=>console.log(err))
        
    }
    })    


};
//  const uploadmultiple = multer({ storage: Storage }).array('testImage',4);


//   const up1 = async (req, res) => {
//     uploadmultiple(req,res,(err)=>{
//      if(err){
//         console.log(err)
//      }   
//      else{
//         const newImage = new imagefield({
//             name: req.body.name,
//             image:{
//                 data: req.files.filename,
//                 contentType: "image/png",
//             },
//         })
//         newImage.save()
//         .then(()=>res.send('sucessfully uploaded')).catch(err=>console.log(err))
        
//     }
//     })    


// };
  function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}

module.exports={up}