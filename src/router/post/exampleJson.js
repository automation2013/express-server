/**
 * @file express路由post请求，request中{"Content-Type","application/x-www-form-urlencoded;charset=UTF-8"}
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();

// 方法
import { setRouterData, getRouterData, } from '../../util/router';

// lodash
import _get from 'lodash/get';

router.post('/exampleJson', function(req, res) {
    // 测试setRouterData, getRouterData函数
    setRouterData(res, { test: 123, });
    console.log(`测试setRouterData: ${getRouterData(res)}`);

    let body = _get(req, 'body') || {};
    res.json(body);
});

export default router;