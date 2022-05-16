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



    newStudent.save()
        .then((result) => {
            res.json({ result: result, message: "saved" });
            res.status(200)
        })
        .catch((err) => {
            res.json({ err: err });
            res.status(500)
        })

}

exports.getOne = (req, res) => {

    Student.findById(req.params.id)
        .then((result) => {
            res.json({ result: result });
            res.status(200)
        })
        .catch((err) => {
            res.json({ err: err });
            res.status(500)
        })
}