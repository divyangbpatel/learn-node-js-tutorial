const express = require('express')
const dbConnect = require('./mongodb')
const app = express()
const mongodb = require('mongodb')
app.use(express.json());

app.get('/', async (req,res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
})


app.post('/create', async (req,res) => {
    let data = await dbConnect();
    const result = await data.insertOne(req.body)
    res.send(result)
})


app.put('/update/:name', async (req,res) => {
    let data = await dbConnect();    
    let result = await data.updateOne(
        {name:req.params.name},  // condition
        {$set:req.body}
    ) 
    res.send(result)

})

app.delete('/delete/:id', async (req,res) => {
    let data = await dbConnect();    
    let result = await data.deleteOne(
        { _id:new mongodb.ObjectId(req.params.id) }  // condition
    ) 
    res.send(result)
})

app.listen(5000)

