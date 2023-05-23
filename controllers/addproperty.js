const logger = require("../helpers/logger");
const { success, error } = require("../helpers/response");
const jwt = require("jsonwebtoken");
const { addfield } = require("../models");
const { getAccessToken } = require("../helpers/token");
const IMAGE_UPLOAD_DIR = "./public/images"
const multiparty =require("multiparty")
const IMAGE_BASE_URL = "http://localhost:3000/images/"

// //add property details
// const addproperty = async (req, res) => {
//     try {
//       const { Add_flat, Distance_radius, Property_type, Bedroom, Bathroom, Furnish_type, Tenant_type, Parking, Amenities, Price_Range, Property_Description, Property_age, Agreement_Duration, Available_form, Monthly_rent, Advance_Amount, Maintenance_charge, Area_size, Contact_no, Due_date, Frequency} = req.body;
  
  
//       const user = new addfield({
//         Add_flat, Distance_radius, Property_type, Bedroom, Bathroom, Furnish_type, Tenant_type, Parking, Amenities, Price_Range, Property_Description, Property_age, Agreement_Duration, Available_form, Monthly_rent, Advance_Amount, Maintenance_charge, Area_size, Contact_no, Due_date, Frequency,
//       });


      
      

//     const buf =  ["Appartment", "villa", "gated community villa"]
//     if(!buf.includes(Property_type)){
//     console.log(Property_type)
//     return res.status(500).json(error({ message: "only Property_type available in Appartment, villa, gated community villa"}));
//     }

//     const buf1 =  ["1BHK", "2BHK", "3BHK", "4BHK","4+ BHK"]
//     if(!buf1.includes(Bedroom)){
//     // console.log(Bedroom)
//     return res.status(500).json(error({ message: "only Bedroom available in 1BHK, 2BHK, 3BHK,4BHK,4+BHK"}));
//     }


//     const buf2 =  ["1", "2", "3"]
//     if(!buf2.includes(Bathroom)){
//     // console.log(Bathroom)
//     return res.status(500).json(error({ message: "only Bathroom available in 1,2, and 3"}));
//     }


//     const buf3 =  ["Semi furnished", "Fully furnished", "Not furnished"]
//     if(!buf3.includes(Furnish_type)){
//     // console.log(Furnish_type)
//     return res.status(500).json(error({ message: "only Furnish_type available in Semi furnished, Fully furnished, Not furnished"}));
//     }

//     const buf4 =  ["Bachelor", "Family", "Any"]
//     if(!buf4.includes(Tenant_type)){
//     // console.log(Tenant_type)
//     return res.status(500).json(error({ message: "only Tenant_type available in Bachelor, Family, Any"}));
//     }

//     const buf5 =  ["1", "2", "3","3+"]
//     if(!buf5.includes(Parking)){
//     // console.log(Parking)
//     return res.status(500).json(error({ message: "only Parking available in 1,2,3 and 3+"}));
//     }
    
//     const buf6 =  ["Air-Conditionor", "Club", "Play ground","Gas","Rain water harvesting"]
//     if(!buf6.includes(Amenities)){
//     // console.log(Amenities)
//     return res.status(500).json(error({ message: "only Amenities available in Air-Conditionor, Club, Play ground,Gas, Rain water harvesting"}));
//     }

//     const buf7 =  ["Under-construction", "<5years", ">5years"]
//     if(!buf7.includes(Property_age)){
//     // console.log(Property_age)
//     return res.status(500).json(error({ message: "only Property_age available in Under-construction, <5years, >5years"}));
//     }

//     const buf8 =  ["11 Months","1 year",">1 year"]
//     if(!buf8.includes(Agreement_Duration)){
//     // console.log(Agreement_Duration)
//     return res.status(500).json(error({ message: "only Agreement_Duration available in 11 Months,1 year,>1 year"}));
//     }

//     const buf9 =  ["Monthly","Quaeter","Half year","Yearly"]
//     if(!buf9.includes(Frequency)){
//     // console.log(Agreement_Duration)
//     return res.status(500).json(error({ message: "only Agreement_Duration available in 11 Months,1 year,>1 year"}));
//     }

//     // user.user_id="645cc55642ff0153dcaf0f28"

//       const result = await user.save();
//       logger.info("information added");
//       res.status(200).json(success("CREATED", result, req.status));
//     } catch (err) {
//       logger.error(err.message);
//       res.status(500).json(error(err.message, res.statusCode));
//     }


//   };


const addproperty = async(req,res)=>{
  const form = new multiparty.Form({uploadDir: IMAGE_UPLOAD_DIR})
  
  form.parse(req, async function(err, fields, files){
    if(err) return res.send({error: err.message});

    console.log(`fields = ${JSON.stringify(fields,null,2)}`)
    console.log(`fields = ${JSON.stringify(files,null,2)}`)

    const imagePath = files.image[0].path;
    const imageFileNmae = imagePath.slice(imagePath.lastIndexOf("\\")+ 1);
    const imageURL = IMAGE_BASE_URL + imageFileNmae;
    console.log(imageURL);

    const adds =new addfield({
      Add_flat: fields.Add_flat[0],
      Distance_radius: fields.Distance_radius[0],
      Property_type: fields.Property_type[0],
      Bedroom:fields.Bedroom[0],
      Bathroom:fields.Bathroom[0],
      // Furnish_type:fields.Furnish_type[0],
      // Tenant_type:fields.Tenant_type[0],
      // Parking:fields.Parking[0],
      // Amenities:fields.Amenities[0],
      // Price_Range:fields.Price_Range[0],
      // Property_Description:fields.Property_Description[0],
      // Property_age:fields.Property_age[0],
      // Agreement_Duration:fields.Agreement_Duration[0],
      // Available_form:fields.Available_form[0],
      // Monthly_rent:fields.Monthly_rent[0],
      // Advance_Amount:fields.Advance_Amount[0],
      // Maintenance_charge:fields.Maintenance_charge[0],
      // Area_size:fields.Area_size[0],
      // Contact_no:fields.Contact_no[0],
      // Due_date:fields.Due_date[0],
      // Frequency:fields.Frequency[0],
      image:imageURL
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

module.exports={addproperty}
