const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require("./models/Employee");
const ProductModel = require('./models/product');
const bcrypt =require ('bcrypt')
const jwt = require ('jsonwebtoken')
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true
}));
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/mydb")

const verifyuser = (req, res, next) => {
    const token = req.cookies.token;
    console.log("Token received:", token);
    if (!token) {
        return res.status(401).json("The token wasn't available");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                console.log("Token verification error:", err);
                return res.status(401).json("Token is wrong");
            }
            console.log("Decoded token:", decoded); // Log decoded token
            next();
        });
    }
};

app.get('/dash', verifyuser, (req, res) => {
        ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.status(500).json(err));
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        res.json("Error comparing password");
                    } else if (response) {
                        const token = jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:"1d"})
                        res.cookie("token",token, { httpOnly: true });
                        res.json("success");
                    } else {
                        res.json("Password is incorrect");
                    }
                });
            } else {
                res.json("No record existed");
            }
        })
})

app.post('/register',(req,res)=>{
    const {name,email,password} =req.body;
    bcrypt.hash(password,10)
    .then(hash => {
        EmployeeModel.create({name,email,password:hash})
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    }).catch (err => console.log(err.message))
    
})

app.post('/add',(req,res)=> {
    ProductModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})



app.get('/add/:id',(req,res)=> {
    const id = req.params.id;
    ProductModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({_id:id},
        {name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        product_des:req.body.product_des})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
