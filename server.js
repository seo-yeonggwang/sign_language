const crypto = require('crypto'); // 암호화 모듈
const fs = require('fs'); // 파일 접근 라이브러리
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // || process.env.PORT

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

app.get('/api/getUserData', (req,res)=>{
    connection.query(
        "SELECT * FROM USER",
        (err, rows, fields) => {
            if (err) {
                console.log('Error executing query:', err);
                return;
            }
            res.send(rows);
        }
    );
})

app.post('/api/checkId', (req, res)=>{
    const { id } = req.body;
    const sql = "SELECT COUNT(*) AS user_count FROM USER WHERE id = ?";
    connection.query(sql, [id], (err, rows)=>{
        if(err){
            console.error('Error: ', err);
            return;
        }
        res.json({ user_count: rows[0].user_count });
    });
});

app.delete('/api/secession/:id', (req, res) => {
    const id = req.params.id; // 요청 URL에서 ID 가져옴
    const sql = "DELETE FROM USER WHERE id = ?";
    connection.query(sql, [id], (err, rows)=>{
        if(err){
            console.error('Error: ', err);
            return;
        }
        res.status(200).json({ message: `${id} 회원의 탈퇴가 완료되었습니다.` });
    });
});

function hash(password) { // 암호화
    return crypto.createHash('sha512').update(password).digest('hex');
}

app.post('/api/postUserData', (req, res)=>{
    let { id, pswd, name } = req.body;
    sql = 'INSERT INTO USER VALUES(?, ?, ?)';
    pswd = hash(req.body.pswd); // 암호화
    let params = [id,pswd,name];
    connection.query(sql,params,
        (err, rows, fields) =>{
            res.send(rows);
        }
        );
    });
    
app.post('/api/login', (req, res)=>{
    const id = req.body.id;
    const pswd = hash(req.body.pswd); // 암호화
    const sql = "SELECT id FROM USER WHERE id = ? AND pswd = ?";
    connection.query(sql, [id, pswd], (err, rows)=>{
        if(err){
            console.error('Error: ', err);
            return;
        }
        if (rows.length > 0) {
            res.json({ id: rows[0].id });
        } else {
            res.json({ id: null }); 
        }    
    });
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));