/**
 * @file express路由入口
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

// 导入路由
import routerStart from './start'; // 所有业务路由之前处理数据
import routerGet from './get'; // get请求
import routerPost from './post'; // post请求
import routerEnd from './end'; // 所有业务路由之后处理数据

// 使用路由
router.use('/', routerStart); // 所有业务路由之前处理数据
router.use('/', routerGet); // 所有get请求
router.use('/', routerPost); // 所有post请求
router.use('/', routerEnd); // 所有业务路由之后处理数据

export default router;