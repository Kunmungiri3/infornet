const Vendor = require('../models/vendor')
async function saveVendor(req, res) {
    try {
        let vendor = new Vendor(req.body)
        let encryptedPassword = bcrypt.hashSync(req.body.password, 10)
        vendor.password = encryptedPassword
        await vendor.save();
        res.redirect('/');
        console.log("data saved successfully...")

    } catch(err) {
         console.log(err);
    }
}
module.exports={
    saveVendor,
}