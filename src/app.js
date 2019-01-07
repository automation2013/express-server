/**
 * @file 工程入口文件
 * @author automation13 <1302779683@qq.com>
 */

'use strict';

/**
 * @description 开源库
 */
import express from 'express';

/**
 * @description 服务器配置参数
 */
import {SERVER_PORT} from './config/expressConfig';

/**
 * @description 创建express服务器
 */
const app = express();

app.get('/', (req, res) => {
    res.send('<div style="color:red">Hello World</div>');
});
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
});

/**
 * @description 启动express服务器，监听端口号为：SERVER_PORT
 */
app.listen(SERVER_PORT, () => {
    console.log(`express server starts to listen port ${SERVER_PORT}`);
});