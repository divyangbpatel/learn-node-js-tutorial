project to use node js
    npm init
    npm --version
    node --version
    npm i
    node file_name only 

install package
    npm i -g nodemon(pkg_name)
    -g means global

dev dependincy to only use not global
    npm i --save-dev nodemon(pkg_name)

install express
    npm install express --save(optional)

npm uninstall
    npm uninstall nodemon(pkg_name)


install angular cli
    npm i @angular/cli


install template engine using html page
    ejs template engine


middleware
    types of middleware in node js
        application level
        router level
        error handling
        built in 
        third party
        

use mongodb database
    non structure database
<!-- mongodb+srv://divyang:Divyang123@cluster0.ibhomni.mongodb.net/ -->

db commands
    show dbs
    use new_db_name
    db.createCollection('table_name')
    show collections
    db.table_name.drop()


    <!-- crud oppp commands -->
    
    db.table_name.insertOne({name:'i phone max pro',brand:'apple',price:1250,category:'mobile'})
    db.table_name.find()
    db.table_name.updateOne({name:"u10"},{$set:{brand:"oppo"}})
    db.table_name.deleteOne({brand:"apple"})


