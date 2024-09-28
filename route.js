const express = require('express')
const studcontrollars = require('./controllar')
const route = express.Router()

route.post('/register',studcontrollars.adduser)

route.get('/finddata',studcontrollars.getdata)

route.put('/updatedata/:fname',studcontrollars.updatedata)

route.delete('/deleteuser/:fname',studcontrollars.deleteuser)

route.post('/login',studcontrollars.login)

module.exports=route