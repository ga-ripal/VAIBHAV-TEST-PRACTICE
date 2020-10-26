const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {USER} = require('../constants/model.constant')

const userSchema = new Schema({
    id:{

    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model(USER, userSchema)