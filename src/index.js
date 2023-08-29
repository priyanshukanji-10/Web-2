const express = require('express');
const app = express();
const path = require('path')
const bcrypt = require('bcrypt');
const { name } = require('ejs');
const { Console } = require('console');
const publicpath = path.join(__dirname, '../Public/css');
const viewspath = path.join(__dirname, '../views');
const server = require('../src/login');

app.use(express.static(publicpath))
app.use(express.json());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('login')
})
app.post('/signup', async (req, res) => {
    const { email, password, dob, Name, repassword } = req.body
    const hashedpassword = await bcrypt.hash(password, 10);
    const data = {
        email,
        hashedpassword,
        Name,
        dob

    }
    const checking = await LogInCollection.findOne({ name: req.body.name })
    try {
        if (checking.name === req.body.name && checking.hashedpassword === req.body.hashedpassword) {
            res.error(400).send('User details already exists');
        }
        else {
            await LogInCollection.insertMany([data])
        }
    }
    catch{
        res.send('wrong inputs')
    }


})
app.listen(3005,
()=>{
    console.log('App Launched at local host http//:localhost3005')
})
