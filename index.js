const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const student = require("./controllers/StudentController")
require("dotenv").config()
require("./db/db")



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/student", student)



app.listen(process.env.PORT || 400, () => {
    // console.log(`Listening on port ${process.env.PORT||400}`);
})
module.exports = app