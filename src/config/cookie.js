/**
 * @file cookie的配置
 * @author automation13 <1271547283@qq.com>
 */

/**
 * cookie统一管理
 * key: 浏览器中展示的cookie的值，相当于加密
 * optionsDefault: cookie的属性，具体配置参考express的文档中res.cookie方法（http://www.expressjs.com.cn/4x/api.html#res.cookie）
 */
const COOKIE_CONFIG = {
    COOKIE_EXAMPLE1: {
        key    : 'cookie1',
        options: {
            httpOnly: true,
            maxAge  : 30 * 1000, // 超时时间30s
            signed  : true, // 必要时才需要将cookie加密（比如用户信息），没必要的情况下就不用了
        },
    },
};

export { COOKIE_CONFIG, };