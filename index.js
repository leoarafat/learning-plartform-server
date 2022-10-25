const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.port || 5000

const categories = require('./data/category.json')
const courses = require('./data/course.json')



app.listen(port,() =>{
    console.log('server is running', port)
    
})