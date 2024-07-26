const mongoose = require('mongoose');

const EmployeeScheema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const EmployeeModel = mongoose.model("employees",EmployeeScheema)
module.exports = EmployeeModel