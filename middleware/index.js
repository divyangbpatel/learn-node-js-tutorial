const express = require('express') 
const app = express()
const route = express.Router()

// use sapterate file throught
// custom middleware

// const reqFilter=(req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please Provide age')
//     }
//     else if(req.query.age < 18){
//         res.send('You Can not access the page')
//     }
//     else{
//         next();
//     }
// }

const reqFilter = require('./middleware')

// use middleware
// app.use(reqFilter)


app.get('/',(req,res) => {
    res.send('welcome to home page')
})

// router middleware
            // middleware
app.get('/users',reqFilter,(req,res) => {
    res.send('welcome to users page')
})


route.use(reqFilter)

route.get('/about',(req,res) => {
    res.send('welcome to about page')
})

route.get('/contact',(req,res) => {
    res.send('welcome to contact page')
})

app.use('/',route);


app.listen(5000)