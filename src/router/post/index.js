/**
 * @file express路由post请求
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();

// 子路由
import examplePost from './example/examplePost';
import exampleUploadFile from './example/exampleUploadFile';

// 使用子路由
router.use('/', examplePost);
router.use('/', exampleUploadFile);

export default router;