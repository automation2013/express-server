/**
 * @file 业务逻辑入口文件
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
import express from 'express';
import path from 'path';

// express中间件
import router from './router';
let bodyParser = require('body-parser');

// 服务器配置参数
import { SERVER_PORT } from './config/express';

// 创建express服务器
const app = express();

/**
 * @description express中间件
 */
// 通过如下代码就可以将 static 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了，例如通过如下URL访问该目录下react-life.png图片：http://localhost:3000/static/images/react-life.png
app.use('/static', express.static(path.join(__dirname, '../static')));
// express中间件
app.use(bodyParser.json()); // create application/json parser
app.use(bodyParser.urlencoded({ extended: true, })); // create application/x-www-form-urlencoded parser。（The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)）（http://www.expressjs.com.cn/en/resources/middleware/body-parser.html）
// express路由
app.use('/', router);

/**
 * @description 启动express服务器，监听端口号为：SERVER_PORT
 */
app.listen(SERVER_PORT, () => {
    console.log(`[server start information] express server starts to listen port ${SERVER_PORT}`);
});