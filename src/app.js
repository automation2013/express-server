/**
 * @file 业务逻辑入口文件
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
import express from 'express';
import path from 'path';

// express中间件
import router from './router';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// 服务器配置参数
import { SERVER_PORT, } from './config/express';

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
// express中间件
app.use(cookieParser()); // cookie解析的中间件
app.use(session({ // Create a session middleware with the given options.
    name             : 'connect.sid', // 使用默认sessionID
    secret           : ['recommand 128 bytes random string', 'secretKey1', 'secretKey2'], // Required option.This is the secret used to sign the session ID cookie.
    resave           : true,
    saveUninitialized: true,
    rolling          : true, // true：每次请求中超时时间都会重置，保证session一直不失效；false：不重置超时时间，即使持续请求，到时间后session同样失效
    cookie           : { // default value is { path: '/', httpOnly: true, secure: false, maxAge: null }.
        secure  : false, // 插件官网建议生产换件设为true. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.(http://www.expressjs.com.cn/en/resources/middleware/session.html)
        httpOnly: true,
        // maxAge  : 24 * 60 * 60 * 1000, // 过期时间：1day
        maxAge  : 5 * 1000, // 过期时间：1day
    },
}));
app.use(bodyParser.json()); // create application/json parser
app.use(bodyParser.urlencoded({ extended: true, })); // create application/x-www-form-urlencoded parser。（The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)）（http://www.expressjs.com.cn/en/resources/middleware/body-parser.html）
app.use('/', router); // express路由

/**
 * @description 启动express服务器，监听端口号为：SERVER_PORT
 */
app.listen(SERVER_PORT, () => {
    console.log(`[server start information] express server starts to listen port ${SERVER_PORT}`);
});