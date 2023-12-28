const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://divyang:Divyang123@cluster0.ibhomni.mongodb.net/e-comm")

const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String,
});

const saveInDB = async () => {
    
    const productModel = mongoose.model('products',productSchema);
    let data = new productModel({name:'m10',brand:'mm',price:1000,category:"mobile"})
    let result = await data.save()
    console.log(result)
}
// saveInDB()

const updateInDB = async () =>{

    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne(
        {name:"m10"},
        {
            $set:{price:5}
        }
    )
    console.log(data)

}
// updateInDB()


const deleteInDB = async () =>{

    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne(
        {name:"m10"},
    )
    console.log(data)

}

// deleteInDB()


const findInDB = async () =>{
    
    const Product = mongoose.model('products',productSchema);
    let allData = await Product.find()
    let conditionalData = await Product.find(
        {name:"redami 5"},
    )
    console.log(allData)
    console.log(conditionalData)
    
}
findInDB()