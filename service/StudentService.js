const Student = require("../schemas/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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



exports.register = async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);


    Student.find({ email: req.body.email })
        .then((result => {
            if (Object.keys(result).length != 0) {
                res.status(200).json({ result: "user already exists" })
            } else {

                let newStudent = new Student({
                    name: req.body.name,
                    email: req.body.email,
                    password: password
                })

                newStudent.save()
                    .then((result) => {
                        res.status(200).json({ result: "saved" });

                    })
                    .catch((err) => {
                        res.status(500).json({ err: err });

                    })
            }

        }))
        .catch(err => {
            res.status(500).json({ err: err });
        })


}

exports.login = (req, res) => {
    Student.find({ email: req.body.email })
        .then(async(result) => {
            if (Object.keys(result).length === 0) {
                res.status(400).json({ message: "user not found" })

            } else {


                if (await bcrypt.compare(req.body.password, result[0].password)) {
                    let user = result[0];

                    const token = jwt.sign({ name: user.name, email: user.email, id: user._id },
                        process.env.TOKEN_KEY, {
                            expiresIn: "6h",
                        }
                    );
                    res.status(200).json({ message: "loged in", token: token })

                } else {

                    res.status(400).json({ message: "invalid user" })
                }
            }
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