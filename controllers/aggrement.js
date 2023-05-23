const { agreementfield } = require("../models");
const FORM_UPLOAD_DIR = "./file/form"
const multiparty =require("multiparty")

const agreement = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: FORM_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)
    
    const agree =new agreementfield({
    
        city: fields.city [0],
        State: fields.State [0],
        Ondate: fields.Ondate [0],
        name: fields.Name [0],
        Father_name:fields.Father_name [0],
        Address_line1:fields.Address_line1 [0],
        Address_line2:fields.Address_line2 [0],
        city:fields.city [0],
        State:fields.State [0],
        Pincode:fields.Pincode [0],
        Bedroom:fields.Bedroom [0],
        Bathroom:fields.Bathroom [0],
        parking:fields.parking [0],
        Sqfeet:fields.Sqfeet [0],
        final_rent:fields.final_rent [0],
        final_advance:fields.final_advance [0],
        agreementduration:fields.agreementduration [0],
        final_maintenance:fields.final_maintenance [0],
        availableform:fields.availableform [0],
        Address_line1:fields.Address_line1 [0],
        Address_line2:fields.Address_line2 [0],
        city:fields.city [0],
        State:fields.State [0],
        
    })

    
 
    try{
      const add = await agree.save();  
      res.send(add);
    }catch(err){
      console.log(err);
      res.send({error:err.message})

    }
  }) 

  }


module.exports={agreement}
