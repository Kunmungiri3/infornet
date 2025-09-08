const Vendor = require('../models/vendor');
const bcrypt = require('bcrypt');

async function saveVendor(req, res) {
    try {
        const encryptedPassword = await bcrypt.hash(req.param.password, 10);

       const vendor = new Vendor(req.body)
        vendor.password=encryptedPassword;

        await vendor.save();
        console.log("Data saved successfully...");
        res.redirect('/');

    } catch (err) {
        console.error("Error saving vendor:", err);
        res.status(500).send("Something went wrong");
    }
}

module.exports = { 
    saveVendor 
};
