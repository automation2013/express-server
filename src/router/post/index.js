/**
 * @file express路由post请求
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

// 子路由
import example1 from './example1';
import example2 from './example2';

// 使用子路由
router.use('/', example1);
router.use('/', example2);

export default router;