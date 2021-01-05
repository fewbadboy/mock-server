const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const contentDisposition = require("content-disposition")
const fs = require("fs")
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

app.post('/download', function(req, res){
  let file = fs.readFileSync('name.doc', 'utf8')
  res.end(file)
})
app.listen(2020)