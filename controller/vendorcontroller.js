const Vendor = require('../models/vendor');
const bcrypt = require('bcrypt');

async function saveVendor(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!password) {
            return res.status(400).send("Password is required");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const vendor = new Vendor({
            name,
            email,
            password: encryptedPassword
        });

        await vendor.save();
        console.log("Data saved successfully...");
        res.redirect('/');

    } catch (err) {
        console.error("Error saving vendor:", err);
        res.status(500).send("Something went wrong");
    }
}

module.exports = { saveVendor };
