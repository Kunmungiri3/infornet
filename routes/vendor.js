const express = require("express");
const path = require("path");
const vendorController = require("../controller/vendorcontroller");
const vendor = require("../models/vendor");


const router = express.Router();
router.get('/save/vendor',(req,res)=>{
    vendorController.saveVendor(req,res);
})

router.get('/vendor-registration',(req,res)=>{
    res.render('vendor-portal')
})

module.exports=router;