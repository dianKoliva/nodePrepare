const express = require("express");
const router = express.Router();
const service = require("../service/StudentService")

router.get("/", (req, res) => {
    service.getStudents(req, res);
})

router.post("/", (req, res) => {
    service.register(req, res);
})
module.exports = router;