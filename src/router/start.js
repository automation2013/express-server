/**
 * @file express业务路由开始之前处理一些数据
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

router.route('/*')
    .get(function(req, res, next) {
        console.log('express-route: start.js get方法');
        next();
    })
    .post(function(req, res, next) {
        console.log('express-route: start.js post方法');
        next();
    })
    .all(function(req, res, next) {
        console.log('express-route: start.js all方法');
        next();
    });

export default router;