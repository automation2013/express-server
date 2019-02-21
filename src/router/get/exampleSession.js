/**
 * @file express路由session中间件的例子
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

router.get('/exampleSession', function(req, res) {
    const sessionTest1 = req.session.sessionTest1;
    const sessionTest2 = req.session.sessionTest2;
    if (sessionTest1 && sessionTest2) {
        res.send('exampleSession：已经有了session，session Id存在了cookie中，修改过期时间，过期后重新刷新页面则会看到重新设置了session');
    } else {
        req.session.sessionTest1 = 'sessionTest1';
        req.session.sessionTest2 = { sessionTest2: 'sessionTest2', };
        res.send('exampleSession：该次请求中设置了session');
    }
});

export default router;