/**
 * @file express业务路由结束之后处理一些数据
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

router.route('/*')
    .get(function(req, res) {
        res.send('该路由get请求不存在，拦截的文件：end.js');
    })
    .post(function(req, res) {
        res.send('该路由post请求不存在，拦截的文件：end.js');
    })
    .all(function(req, res) {
        res.send('该路由不存在，拦截的文件：end.js');
    });

export default router;