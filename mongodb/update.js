const dbConnect = require('./mongodb')

const updateData = async () =>{
    let data = await dbConnect();
    // let result = await data.updateMany(
    //     {name:'note 5'},{$set:{name:'note 8',price:300}}
    // )

    let result = await data.updateOne(
        {name:'note 5'},{$set:{name:'note 8',price:300}}
    )

    if (result.acknowledged){
        console.log("data updated");
    }
}

updateData();