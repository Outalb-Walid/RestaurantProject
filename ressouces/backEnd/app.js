var express = require("express");
var path = require("path");
var database = require("./database")
var morgan = require("morgan")

var publicDirectory  = path.resolve(__dirname + "../../../");
var app = express();

app.set('views',path.resolve(__dirname+"../../../ressouces/other pages/confirmation"));
app.set("view engine","ejs");
const BodyParser = require("body-parser")
app.use(BodyParser.urlencoded({extended:false}));
app.post("*",(req,res)=>{
    var data = req.body;
    var name = data.name;
    var lastName = data.lastName;
    var phoneNumber = data.phoneNumber;
    var email = data.email;
    if(name !=undefined && lastName != undefined && phoneNumber !=undefined && email !=undefined){
        const query = `INSERT INTO reservation(name,lastName,phoneNumber,email) VALUES ("${name}","${lastName}","${phoneNumber}","${email}")`;
        database.query(query,function(err,resultat){
            if(err){
                console.log(err)
            }
            else{
                res.render("confirmation",{
                    fullName : name+" "+lastName
                });
            }
        });
    };
})

app.use(express.static(publicDirectory));
app.listen(3000);