/**
 * @file 工程入口文件
 * @author automation13 <1271547283@qq.com>
 */

/**
 * @description 开发环境：引入babel，允许node工程中使用es6语法；生产环境：运行"npm run build"时使用babel进行了编译，因此不需要预置es6开发环境
 */
(function setES6Environment() {
    const nodeInfo = require('./util/common/node');
    const nodeEnv = nodeInfo.getNodeEnv();
    switch (nodeEnv) {
        case 'PRO':
            break;
        case 'DEV':
            require('@babel/register');
            break;
        default:
            console.error('package.json中配置的环境变量NODE_ENV的枚举值不存在');
    }
})();

/**
 * @description 工程所需要的公共的功能
 */
require('./global/index');

/**
 * @description 业务逻辑入口
 */
require('./app');