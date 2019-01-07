/**
 * @file 工程入口文件
 * @author automation13 <1302779683@qq.com>
 */

'use strict';

/**
 * @description 引入babel，允许node工程中使用es6语法
 */
require('babel-register');

/**
 * @description 业务逻辑入口
 */
require('./src/app');

/**
 * @description 测试函数
 * @param {number} a 
 * @param {number} b 
 */
function ff(a, b) {
    console.log(a);
}
