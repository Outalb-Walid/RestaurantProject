const mysql = require("mysql2");
const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ayoube essadeq',
        database:'restaurant',
    }
);
connection.connect((err)=>{
    if(err){ 
        console.log(err)
        console.log("Something Went Wrong")
        return };
    console.log("Database is connected ✔")
})

module.exports = connection;