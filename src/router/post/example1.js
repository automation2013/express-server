/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

// 方法
import { setRouterData, getRouterData, } from '../../util/router';

// lodash
import _get from 'lodash/get';

router.post('/example1', function(req, res) {
    // 测试setRouterData, getRouterData函数
    setRouterData(res, { test: 123, });
    console.log(`测试setRouterData: ${getRouterData(res)}`);

    let body = _get(req, 'body') || {};
    res.json(body);
});

export default router;