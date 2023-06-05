const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "temanhewan"
})

app.post('/signup', (req, res)=> {
    const sql = "INSERT INTO users (`name`, `username`, `email`, `bday`, `address`,`phone`, `PASSWORD`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.username,
        req.body.email,
        req.body.bday,
        req.body.address,
        req.body.phone,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json("ERROR");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res)=> {
    const sql = "SELECT * FROM users WHERE `username` = ? AND `PASSWORD` = ?";
    db.query(sql, [req.body.username, req.body.password,], (err, data) =>{
        if(err) {
            return res.json("ERROR");
        }
        if(data.length > 0){
            return res.json("Success")
        }
        else{
            return res.json("Failed")
        }
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})