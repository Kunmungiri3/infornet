const express = require("express");
const path = require("path");
const vendorController = require("../controller/vendorcontroller");
const vendor = require("../models/vendor");


const router = express.Router();
router.get('/saveVendor',(req,res)=>{
    vendorController.saveVendor(req,res);
})

router.get('/vendor-portal',(req,res)=>{
    res.render('vendor-portal');
})
router.post('/saveVendor',(req,res)=>{
    vendorController.saveVendor(req,res);
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
router.get('/vendor-registration',(req,res)=>{
    res.render('vendor-registration')
}) 



module.exports=router;