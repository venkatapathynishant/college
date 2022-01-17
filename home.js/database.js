const express = require("express");
const {
  getStudents,
  createStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();