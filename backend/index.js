//使用express构建web服务器 --11:25
const express = require("express");

const app = express();
app.listen(80);
app.use(express.static("./dist"));
