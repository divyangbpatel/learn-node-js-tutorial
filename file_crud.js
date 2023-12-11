const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`
// write file
fs.writeFileSync(filePath,'This is file write Content')

// read file
fs.readFile(filePath,'utf-8',(err,item)=>{
    console.log(item);
})

// update file date to add new data append
fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
    if(!err) console.log('File is updated');
})

// rename file name
fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
    if(!err) console.log('File Name is updated');
})

// drop  file
fs.unlinkSync(`${dirPath}/fruits.txt`)