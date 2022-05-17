const express = require("express");
const router = express.Router();
const service = require("../service/StudentService")
const checker = require("../middleware/check")

router.get("/", checker, (req, res) => {

    service.getStudents(req, res);
})

router.post("/login", (req, res) => {
    service.login(req, res);
})

router.post("/", checker, (req, res) => {

    service.register(req, res);
})
router.get("/:id", (req, res) => {
    service.getOne(req, res);
})
router.delete("/:id", (req, res) => {
    service.deleteOne(req, res);
})
router.delete("/", (req, res) => {
    service.deleteMany(req, res)
})

module.exports = router;