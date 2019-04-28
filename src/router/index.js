/**
 * @file express路由入口
 * @author automation13 <1271547283@qq.com>
 */

import express from 'express';

// router使用到的express中间件
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// 封装的公共方法
import { enhanceRequest, enhanceResponse } from '../util/express/enhance-middleware';

// 导入路由
import routerStart from './start'; // 所有业务路由之前处理数据
import routerGet from './get'; // get请求
import routerPost from './post'; // post请求
import routerEnd from './end'; // 所有业务路由之后处理数据

const router = express.Router();

/**
 * express开源中间件初始化
 */
(function useMiddleware() {
    // 处理cookie、session中间件
    router.use(cookieParser('recommand 128 bytes random string')); // cookie解析的中间件，参数为加密cookie的秘钥（string or array），res.cookie方法设置cookie时如果参数secure为true时要用这个秘钥加密cookie，(参考：http://www.expressjs.com.cn/en/resources/middleware/cookie-parser.html；http://www.expressjs.com.cn/4x/api.html#res.cookie)
    router.use(session({ // Create a session middleware with the given options.
        name             : 'connect.sid', // 使用默认sessionID
        secret           : ['recommand 128 bytes random string', 'secretKey1', 'secretKey2'], // Required option.This is the secret used to sign the session ID cookie.
        resave           : true,
        saveUninitialized: true,
        rolling          : true, // true：每次请求中超时时间都会重置，保证session一直不失效；false：不重置超时时间，即使持续请求，到时间后session同样失效
        cookie           : { // default value is { path: '/', httpOnly: true, secure: false, maxAge: null }.
            secure  : false, // 插件官网建议生产换件设为true. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.(http://www.expressjs.com.cn/en/resources/middleware/session.html)
            httpOnly: true,
            maxAge  : 24 * 60 * 60 * 1000, // 过期时间：1day
        },
    }));

    // 必须放在bodyParser之前，因为bodyParser出错时错误中间件中是用来这里定义的函数
    router.use(enhanceRequest); // 增加express的req的功能
    router.use(enhanceResponse); // 增加express的res的功能

    // 解析http请求的body
    router.use(bodyParser.json({ extended: true, limit: '20mb', })); // create application/json parser
    router.use(bodyParser.urlencoded({ extended: true, limit: '20mb', })); // create application/x-www-form-urlencoded parser。（The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)）（http://www.expressjs.com.cn/en/resources/middleware/body-parser.html）
})();

/**
 * 使用路由
 */
(function useRouter() {
    router.use('/', routerStart); // 所有业务路由之前处理数据
    router.use('/', routerGet); // 所有get请求
    router.use('/', routerPost); // 所有post请求
    router.use('/', routerEnd); // 所有业务路由之后处理数据
})();

export default router;