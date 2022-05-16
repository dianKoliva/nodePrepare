const Student = require("../schemas/Student")

exports.getStudents = (req, res) => {

    Student.find()
        .then(result => {
            res.json({ result: result });
            res.status(200)
        })
        .catch(err => {
            res.json({ result: err })
        })

}


exports.register = (req, res) => {

    let newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

}