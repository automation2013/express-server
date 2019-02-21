/**
 * @file express路由post请求
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();

// 子路由
import exampleJson from './exampleJson';
import exampleForm from './exampleForm';

// 使用子路由
router.use('/', exampleJson);
router.use('/', exampleForm);

export default router;