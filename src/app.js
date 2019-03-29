/**
 * @file 业务逻辑入口文件
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
import express from 'express';
import path from 'path';

// express中间件
import router from './router';
import './util/example/enhance-hbs-demo';
import { enhanceErrorLog, enhanceErrorRender, } from './util/enhance-express-middleware-error';

// 服务器配置参数
import { SERVER_PORT, } from './config/express';

import Logger from './util/common/logger';

// 创建express服务器
const app = express();

/**
 * @description express服务器设置
 */
app.set('trust proxy', 1); // Indicates the app is behind a front-facing proxy, and to use the X-Forwarded-* headers to determine the connection and the IP address of the client. (设置为1：trust first proxy)

/**
 * @description express中间件
 */
// 通过如下代码就可以将 static 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了，例如通过如下URL访问该目录下react-life.png图片：http://localhost:3000/static/images/react-life.png
app.use('/static', express.static(path.join(__dirname, '../static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs'); // express模板引擎：handlebarsjs
app.use('/', router); // express路由
app.use(enhanceErrorLog); // express错误处理中间件：记录错误日志
app.use(enhanceErrorRender); // express错误处理中间件：兜底反馈

/**
 * @description 启动express服务器，监听端口号为：SERVER_PORT
 */
app.listen(SERVER_PORT, () => {
    Logger.serverInfo(`express server starts to listen port ${SERVER_PORT}`);
});