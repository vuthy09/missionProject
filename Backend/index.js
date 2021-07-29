const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'missionxdb.c7cxqkjagnrx.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminpassword',
    database: "mission_x" 
})

db.connect((err) => {
    if(err){
        console.log(err);
    }else {
        console.log("db connected!");
    } 
})

app.get('/student-profile', (req, res)=>{
    db.query("SELECT * FROM user", (err, result)=>{
        res.send(result);
    })
})
app.listen(4000, ()=>{
    console.log('app is running on port 4000');
})
