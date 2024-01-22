const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('LoginSignup', FormDataSchema);

module.exports = FormDataModel;
