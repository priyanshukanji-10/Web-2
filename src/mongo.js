const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('mongoose connected!');
    })
    .catch(error => {
        console.error('Connection failed:', error);
    });
const newloginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    hashedpassword: {
        type: String,
        required: true
    }
})
const LogInCollection=new mongoose.model('LogInCollection',newloginSchema)
module.exports=LogInCollection

