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
            res.status(200).json({ result: result, message: "saved" });

        })
        .catch((err) => {
            res.status(500).json({ err: err });

        })

}

exports.getOne = (req, res) => {

    Student.findById(req.params.id)
        .then((result) => {
            if (result != null) {
                res.status(200).json({ result: result });

            } else {
                res.status(400).json({ result: "not found" })

            }

        })
        .catch((err) => {
            res.status(500).json({ err: err });

        })
}
exports.deleteOne = (req, res) => {

    Student.findById(req.params.id)
        .then((result) => {
            if (result == null) {
                res.status(400).json({ result: "not found" })

            } else {
                Student.deleteOne({ _id: req.params.id })
                    .then(() => {
                        res.status(200).json({ result: "deleted" })
                    })
                    .catch((err) => {
                        res.status(500).json({ err: err })
                    })
            }
        })
}

exports.deleteMany = (req, res) => {

    Student.deleteMany({})
        .then(() => {
            res.status(200).json({ result: "all deleted" })
        })
        .catch((err) => {
            res.status(500).json({ err: err })
        })
}