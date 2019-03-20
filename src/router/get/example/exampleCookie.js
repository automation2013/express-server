/**
 * @file express路由cookie-parser中间件的例子
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

router.get('/exampleCookie', function(req, res) {
    res.enhanceAddCookie('COOKIE_EXAMPLE1', 'xxxxxxxx')
    console.log(`exampleCookie测试：${JSON.stringify(req.enhanceGetCookie('COOKIE_EXAMPLE1'))}`); // 如果超时则打印的cookie中没有cookieTest这个cookie
    res.send('exampleCookie：设置cookie成功');
});

export default router;