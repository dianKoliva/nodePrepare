const express = require("express");
const router = express.Router();
const service = require("../service/StudentService")

router.get("/", (req, res) => {
    service.getStudents(req, res);
})

router.post("/", (req, res) => {
    service.register(req, res);
})
router.get("/:id", (req, res) => {
    service.getOne(req, res);
})
module.exports = router;