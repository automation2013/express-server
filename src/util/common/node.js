/**
 * @file 公共方法
 * @author automation13 <1271547283@qq.com>
 */

/**
 * 获取node的运行环境
 * @return {string}
 */
function getNodeEnv() {
    const env = process.env.NODE_ENV; // NODE_ENV的指定是在package.json中完成的
    switch (env) {
        case 'production':
            return 'PRO';
        case 'development':
            return 'DEV';
        default:
            console.error('[工程启动失败]--启动工程时未指定NODE_ENV，请全局搜索函数"getNodeEnv",函数注释有解决方案');
            return '';
    }
}

module.exports = {
    getNodeEnv, // 获取node的运行环境
};