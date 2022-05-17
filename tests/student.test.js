const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = require("..");

const { getOne } = require("../service/StudentService")



describe("Student testing", () => {
    it('Get all students', () => {
        request(app)
            .get("/student")
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Get one student', () => {
        request(app)
            .get("/student/6282c38c849e4976dc448f62")
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("post student", () => {
        request(app)
            .post("/student")
            .send({ name: "lplplplp", email: "lp@gmail.com", password: "kokoko" })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("delete one student", () => {
        request(app)
            .delete("/student/6282c38c849e4976dc448f62")
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("delete all student", () => {
        request(app)
            .delete("/student")
            .expect('Content-Type', /json/)
            .expect(200)
    })
})


// sample of unit testing
// describe('UNIT TESTING tokens ', () => {
//     it("should create token ", async() => {
//         await expect(createToken({ amount: 200, meter: 123456 })).toStrictEqual("generated");
//     })
// })