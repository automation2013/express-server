/**
 * @file express路由post请求，request中{"Content-Type","application/x-www-form-urlencoded;charset=UTF-8"}
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();

// lodash
import _get from 'lodash/get';

router.post('/exampleForm', function(req, res) {
    const body = _get(req, 'body') || {};
    res.json(body);
});

export default router;