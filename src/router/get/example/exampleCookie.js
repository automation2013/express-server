/**
 * @file express路由cookie-parser中间件的例子
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

router.get('/exampleCookie', function(req, res) {
    res.cookie('cookieTest', `test${new Date().getTime()}`, { maxAge: 30 * 1000, httpOnly: true, }); // 超时时间30s
    console.log(`exampleCookie测试：${JSON.stringify(req.cookies)}`); // 如果超时则打印的cookie中没有cookieTest这个cookie
    res.send('exampleCookie：设置cookie成功');
});

export default router;