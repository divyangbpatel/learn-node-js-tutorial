const express = require('express') 
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs')

app.get('',(req,res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req,res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(req,res) => {
    res.sendFile(`${publicPath}/help.html`)
})
// using ejs
app.get('/profile',(req,res) => {
    const user = {
        name:'anil',
        email:'anil@test.com',
        city:'ahmedabad',
        skills:['php','js','c++','java','node js'],
    }
    res.render('profile',{user})
})

app.get('/login',(_,res) => {
    res.render('login')
})

app.get('*',(req,res) => {
    res.sendFile(`${publicPath}/404.html`)
})




app.listen(5000)