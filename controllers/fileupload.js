const logger = require("../helpers/logger");
const { filefield } = require("../models");
const FILE_UPLOAD_DIR = "./docc/file"
const multiparty =require("multiparty")
const FILE_BASE_URL = "http://localhost:3000/files/"



const fileupload = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: FILE_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)

    const filePath = files.Rentalagreementfile[0].path;
    const FileNmae = filePath.slice(filePath.lastIndexOf("\\")+ 1);
    const fileURL = FILE_BASE_URL + FileNmae;
    console.log(fileURL);

    const adds =new filefield({
      Propertytype: fields.Propertytype [0],
      Rentalagreementfile:fileURL
    })
 
    try{
      const addprop = await adds.save();  
      res.send(addprop);
    }catch(err){
      console.log(err);
      res.send({error:err.message})

    } 

  })
}

module.exports={fileupload}
