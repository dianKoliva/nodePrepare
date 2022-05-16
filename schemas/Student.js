var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    Password: { type: String, required: true },
})

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;