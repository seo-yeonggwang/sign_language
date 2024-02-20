const fs = require('fs'); // 파일 접근 라이브러리
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect((err) => {
    if (err) {
        console.log("connection failed");
        return;
    }
    console.log("connection seccess");
});

app.get('/api/test', (req,res)=>{
    
    connection.query(
        "SELECT * FROM USER;",
        (err, rows, fields) => {
            if (err) {
                console.log('Error executing query:', err);
                return;
            }
            res.send(rows);
        }
    );

})

app.listen(port, ()=> console.log(`Listening on port ${port}`));