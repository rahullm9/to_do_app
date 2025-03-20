const express = require ("express");
const app = express();
require("./connection/db");
const auth = require("./routes/auth");
const list = require("./routes/list");
const cors = require("cors")

app.get('/', function (req, res){
    // res.send("Hello worldd");
})

app.use(cors());
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(3000, () => {
    console.log("Server is running on port 3000");   
});