const express = require('express');//express module을 가져옴.
const app = express();//function을 이용해서 app 생성
const port = 3000 //port는 아무렇게나 해도 됨.

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gryu:asdf1020@cluster0.nxx7q.mongodb.net/ Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected"))//안쓰면 에러가 뜸. 몽구스 먼저 설치할것.(npm install mongoose --save)
 .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!adfsda')); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));