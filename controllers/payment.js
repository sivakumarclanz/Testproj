const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const { paymentfield } = require("../models");



const paymentprocess =async(req,res)=>{

const {amount,currency,receipt,notes} = req.body

const instance = new Razorpay({
    key_id: "rzp_test_VY9pIMOIrylabx",
    key_secret: "P6uMU7wdkbrTOaKULEFH097x",
  });

  const order =({
    amount,
    currency,
    receipt,
    notes,  
  })

  instance.orders.create(order, (err, order) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to create order' });
    } else {
      res.json(order);
    }
  });

  
}
module.exports = paymentprocess;
