/**
 * @file express业务路由开始之前处理一些数据
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

router.route('/*')
    .get(function(req, res, next) {
        next();
    })
    .post(function(req, res, next) {
        res.set({
            'Content-Type': 'application/json',
        });
        next();
    })
    .all(function(req, res, next) {
        next();
    });

export default router;