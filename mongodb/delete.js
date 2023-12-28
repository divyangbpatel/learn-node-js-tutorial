const dbConnect = require('./mongodb')

const deleteData = async () =>{
    let data = await dbConnect();
    // let result = await data.deleteOne({name:'note 8'})

    let result = await data.deleteMany({name:'note 513'})

    if (result.acknowledged){
        console.log("data deleted");
    }
}


deleteData();
