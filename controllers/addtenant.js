const { tenantfield } = require("../models");
const FORM_UPLOAD_DIR = "./file/form"
const multiparty =require("multiparty")

const addtenant = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: FORM_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)
    
    const tenant =new tenantfield({
    
        Name: fields.Name [0],
        Email_ID: fields.Email_ID [0],
        Mobile_number: fields.Mobile_number [0],
        Father_name:fields.Father_name [0],
        Address_line1:fields.Address_line1 [0],
        Address_line2:fields.Address_line2 [0],
        city:fields.city [0],
        State:fields.State [0],
        Pincode:fields.Pincode [0]
        
    })

    
 
    try{
      const add = await tenant.save();  
      res.send(add);
    }catch(err){
      console.log(err);
      res.send({error:err.message})

    }
  }) 

  }


module.exports={addtenant}
