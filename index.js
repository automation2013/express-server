/**
 * @file 工程入口文件
 * @author automation13 <1271547283@qq.com>
 */

/**
 * @description 引入babel，允许node工程中使用es6语法
 */
require('@babel/register');

/**
 * @description 工程所需要的公共的功能
 */
require('./src/global');

/**
 * @description 业务逻辑入口
 */
require('./src/app');