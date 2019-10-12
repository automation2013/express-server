/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

import { webGetLogger } from '../../util/logger';

// 子路由
import example from './example/example';
import exampleCookie from './example/exampleCookie';
import exampleSession from './example/exampleSession';
import exampleHandlebars from './example/exampleHandlebars';
import exampleSvg from './example/example-svg';

// 所有get请求之前处理
router.get('/*', function(req, res, next) {
    webGetLogger(req, res);
    next();
});

// 重定向到首页
router.get('/', function(req, res) {
    res.redirect('/index'); // 重定向到首页
});

// 首页路由
router.get('/index', function(req, res) {
    res.send('<h1 style="color: green">express-server服务器主页</h1>');
});

// 使用子路由
router.use('/', example);
router.use('/', exampleCookie);
router.use('/', exampleSession);
router.use('/', exampleHandlebars);
router.use('/', exampleSvg);

export default router;