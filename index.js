const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.port || 5000

const categories = require('./data/category.json')
const courses = require('./data/course.json')

app.get('/', (req, res)=>{
    res.send('Courses API is running')
})
app.get('/category-course', (req, res)=>{
    res.send(categories)
})
app.get('/course-category', (req, res)=>{
    res.send(courses)
})
app.get('/courseData/:id', (req, res)=>{
    const id = req.params.id ;
    const selectedId = courses.find(c => c.id === id) 
    res.send(selectedId)
})


app.listen(port,() =>{
    console.log('server is running', port)
    
})