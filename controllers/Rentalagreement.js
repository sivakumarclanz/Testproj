const { rentalagreementfield } = require("../models");
const FORM_UPLOAD_DIR = "./file/form"
const multiparty =require("multiparty")

const rentalagreement = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: FORM_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)
    
    const agree =new rentalagreementfield({
      
        // Rentalagreement: fields.Rentalagreement [0],
        Name: fields.Name [0],
        Dateofexcution: fields.Dateofexcution [0],
        Phonenumber: fields.Phonenumber [0],
        Rentalperiod: fields.Rentalperiod [0],
        Email:fields.Email [0],
        Monthlyrent:fields.Monthlyrent [0],


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


module.exports={rentalagreement}
