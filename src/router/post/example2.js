/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

// lodash
import _get from 'lodash/get';

router.post('/example2', function(req, res) {
    let body = _get(req, 'body') || {};
    res.json(body);
});

export default router;