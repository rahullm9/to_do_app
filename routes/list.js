const router = require("express").Router();
const List = require("../model/list");
const User = require("../model/user");

router.post("/addtask", async (req, res) => {
    try {
        const {title, body, email} = req.body;
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            const list = new List({title, body, user: existingUser});
            await list.save();
            res.status(201).json({ list });
            existingUser.list.push(list);
            await existingUser.save();
        }
    } catch (error) {
        res.status(error);   
    }
})

module.exports = router