/**
 * @file express路由post请求，request中{"Content-Type","application/x-www-form-urlencoded;charset=UTF-8"}
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();

// lodash
import _get from 'lodash/get';

router.post('/exampleJson', function(req, res) {
    // 测试setRouterData, getRouterData函数
    res.enhanceStoreData({ m: 123, });
    console.log(`测试setRouterData: ${JSON.stringify(res.enhanceGetData())}`);

    const body = _get(req, 'body') || {};
    res.json(body);
});

router.post('/exampleForm', function(req, res) {
    const body = _get(req, 'body') || {};
    res.json(body);
});

export default router;