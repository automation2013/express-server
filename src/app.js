/**
 * @file 业务逻辑入口文件
 * @author automation13 <1302779683@qq.com>
 */

/**
 * @description 开源库
 */
import express from 'express';
import path from 'path';

/**
 * @description 服务器配置参数
 */
import {SERVER_PORT} from './config/expressConfig';

/**
 * @description 创建express服务器
 */
const app = express();

/**
 * @description 通过如下代码就可以将 static 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了，
 * 例如通过如下URL访问该目录下react-life.png图片：http://localhost:3000/static/images/react-life.png
 */
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => {
    res.send('<div style="color:red">Hello World</div>');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

/**
 * @description 启动express服务器，监听端口号为：SERVER_PORT
 */
app.listen(SERVER_PORT, () => {
    console.log(`express server starts to listen port ${SERVER_PORT}`);
});
