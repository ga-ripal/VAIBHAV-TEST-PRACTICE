const express = require('express');
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./models/user.model')
const {PORT,DB_URI} = require('./configs/env.config')
mongoose.connect(DB_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('Connected to database')
})
app.use(require('./routes/api/index.route'))
app.listen(PORT,()=>{
    console.log('server started')
})