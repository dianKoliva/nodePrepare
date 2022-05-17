const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = require("../index");
const utils = require("../utils/util")

const { getOne } = require("../service/StudentService")
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsIiwiaWQiOiI2Mjg0MDMxMTQ1YjAwYzVkZGU1OTE5MmEiLCJpYXQiOjE2NTI4MTk4MDksImV4cCI6MTY1Mjg0MTQwOX0.kIjFQAG7O9kTik37GW7NE_sOzNNakifnwtInaOWCCdA"



describe("Student testing", () => {
    it('Get all students', () => {
        request(app)
            .get("/student")
            .set({ authorization: token })
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

describe("for utils", () => {
    it("should say hi", () => {
        expect(utils.sayHi()).toBe("hello pipo")
    })
})