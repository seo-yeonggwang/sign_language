const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/test', (req,res)=>{
    res.send([
        {
            'id': 'test',
            'pswd': 'test',
            'learning-progress': '60%'
        },
        {
            'id': 'test2',
            'pswd': 'test2',
            'learning-progress': '80%'
        }
    ]);
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));