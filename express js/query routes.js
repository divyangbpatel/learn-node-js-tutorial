// route with query params and render html tags
 
const express = require('express') 
const app = express()

app.get('',(req,res) => {
    res.send('<h1>Welcome ,This is home page</h1> <a href="/about"> go to about page</a> ')
})

app.get('/about',(req,res) => {
    let name = req.query.name 
    res.send(`
        <input type='text' placeholder='User Name' value="${name}"/>
        <button>click me</button>
        <a href="/"> go to Home page</a> 
    `)
})

app.get('/help',(req,res) => {
    res.send([
        {
            name:'anil',
            email:'anil@test.com'   
        },
        {
            name:'sam',
            email:'sam@test.com'   
        }
    ])
})

app.listen(5000)