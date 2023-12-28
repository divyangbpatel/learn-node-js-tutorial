const dbConnect = require('./mongodb')

const insert = async () =>{
    let db = await dbConnect();
    // const result = await db.insertOne(
    const result = await db.insertMany(
        [
            { name:"note 53",brand:'vivo',price:320,category:'mobile' },
            { name:"note 534",brand:'vivo',price:320,category:'mobile' },
            { name:"note 523",brand:'vivo',price:320,category:'mobile' },
            { name:"note 513",brand:'vivo',price:320,category:'mobile' },
        ]
    )
    
    if (result.acknowledged){
        console.log("data inserted");

    }
}

insert();
