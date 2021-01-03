const express = require('express');//express module을 가져옴.
const app = express();//function을 이용해서 app 생성
const port = 5000 //port는 아무렇게나 해도 됨.

const bodyParser = require("body-parser");
const config = require("./config/key");


const { User } = require("./models/User.js");

app.use(bodyParser.urlencoded({extended: true}));//어플리케이션 x-www-fomr-urlencoded
app.use(bodyParser.json()); //application / json
 
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connecteeeed"))//안쓰면 에러가 뜸. 몽구스 먼저 설치할것.(npm install mongoose --save)
 .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!adfsda')); 

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 CLIent서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body);//request안의 BODY에는 제이슨 형태의 데이터가 들어있음. 바디파서가 해줌
    user.save((err, userInfo)=>{//save 는 몽고디비 메서드
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success : true
        });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

