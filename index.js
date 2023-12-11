const data = require('./second')
const path = require('path')
const filesystem = require('fs')

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));
console.log(path.extname(__filename));


// filesystem.readFile('readme.txt','utf-8',(err,data)=>{
//     console.log(err,data);
// })

const a = filesystem.readFileSync('readme.txt')
console.log(a.toString());

console.log(path.extname(__filename));



console.log('hello world!',data);