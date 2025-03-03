const router = require("express").Router();
const List = require("../model/list");
const User = require("../model/user");

router.post("/addtask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save();
      res.status(201).json({ list });
      existingUser.list.push(list);
      await existingUser.save();
    }
  } catch (error) {
    res.status(error);
  }
});

router.put("/updatetask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.find({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(
        { _id: req.params.id },
        { title, body }
      );
      await list.save();
      res.status(201).json({ message: "Task updated successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.delete("/deletetask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list:req.params.id } } 
    );
    if (existingUser) {
      await List.findByIdAndDelete({ _id: req.params.id });
      res.status(201).json({ message: "Deleted successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/gettask/:id", async (req, res) => {
    const list = await List.find({user: req.params.id}).sort({createdAt: -1});
    if(list.length > 0){
        res.status(200).json({ list: list });
    }else{
        res.status(200).json({ message: "No task found" });
    }
});

module.exports = router;
