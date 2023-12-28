const dbConnect = require('./mongodb')

// method 1
dbConnect().then((res) => {
    res.find().toArray().then((data) =>{
        console.log(data);
    });
    res.find({name:'m 40'}).toArray().then((data) =>{
        console.log(data);
    });
})

// method 2
const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();