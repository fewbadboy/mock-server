const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const { user } = require('./user/user')

const app = express()

app.use(cors())
app.use(cookieParser())
app.get('/load/:user', function(req,res, next){
 console.log('hello world')
 next()
}, function(req,res){
  res.json({
    user
  })
})

app.listen(2020)