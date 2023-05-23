const { accountfield } = require("../models");
const FORM_UPLOAD_DIR = "./file/form"
const multiparty =require("multiparty")

const account = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: FORM_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)
    
    const addaccount =new accountfield({
    
      Rentalaccount: fields.Rentalaccount [0],
      Advanceaccount: fields.Advanceaccount [0],
      Maintenanceaccount: fields.Maintenanceaccount [0],
      EBaccount:fields.EBaccount [0],
      
    })
 
    try{
      const add = await addaccount.save();  
      res.send(add);
    }catch(err){
      console.log(err);
      res.send({error:err.message})

    }
  }) 

  }


module.exports={account}
