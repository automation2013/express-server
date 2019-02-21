/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

// 子路由
import example1 from './example1';
import exampleCookie from './exampleCookie';
import exampleSession from './exampleSession';

// 重定向到首页
router.get('/', function(req, res) {
    res.redirect('/index'); // 重定向到首页
});

// 首页路由
router.get('/index', function(req, res) {
    res.send('<h1 style="color: green">express-server服务器主页</h1>');
});

// 使用子路由
router.use('/', example1);
router.use('/', exampleCookie);
router.use('/', exampleSession);

export default router;