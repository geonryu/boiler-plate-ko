const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,//공백문자열을 없애줌
        unique: 1//다른거 못쓰게...
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },//유저의 권한(관리자라던지)
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }//token 유효기간
});//schema

const User = mongo.model('User', userSchema)//스키마를 모델로 감싸줌

module.exports = { User }