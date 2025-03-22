const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashpassword });
    await user.save();
    res.status(200).json({ message: "SignUp successfully" });
  } catch (error) {
    res.status(200).json({ message: "User already exists" });
  }
});

//login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: "Please enter a valid email" });
      }
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (passwordMatch) {
        const { password, ...userData } = user._doc;
        return res.status(200).json({ data: userData });
      } else {
        return res.status(400).json({ message: "Please enter a valid password" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;
