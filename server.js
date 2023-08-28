const express = require("express");
const bcrypt= require("bcrypt")
const app = express()
const secretKey = "Priyanshu@2005"
const user = [];


app.get('/', (req, res) => {
  res.sendFile(__dirname + "../Signup/signup.html");
})
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword=await bcrypt.hash(password,10);
})