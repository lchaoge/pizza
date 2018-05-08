// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json()); // 用来接收post提交的json数据
app.use(bodyParser.urlencoded({extended:true})); // 也可以接收任何数据类型的数据，包括文本、视频、图片等

// 后端api路由
app.use('/api/user', userApi);


// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');