const fs = require('fs');
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.setHeader('content-type','text/html')
    if (req.url == '/'){
        res.statusCode = 200
        res.end('<h1>Divyang Here</h1>')
    }else if(req.url == '/about'){
        res.end('<h1>about Here</h1>')
        res.statusCode = 200
    }else if(req.url == '/hello'){
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }else{
        res.statusCode = 404
        res.end('<h1>not found</h1>')
    }
})

server.listen(port,()=>{
    console.log(`server is listerning of port ${port}`);    
})