/**
 * @file 为express中间件，增加req、res的功能
 * @author automation13 <1271547283@qq.com>
 */

// cookie的config
import { COOKIE_CONFIG, } from '../config/cookie';

const STORE_DATA_KEY = 'enhanceStoreDataKey';

// lodash
import _get from 'lodash/get';
import _assign from 'lodash/assign';
import _isString from 'lodash/isString';

/**
 * 增加express的req的功能
 * @param req express的req
 * @param res express的res
 * @param next express的next
 */
function enhanceRequest(req, res, next) {
    req.enhanceGetCookie = enhanceGetCookie.bind(req);
    next();
}

/**
 * 增加express的res的功能
 * @param req express的req
 * @param res express的res
 * @param next express的next
 */
function enhanceResponse(req, res, next) {
    res.enhanceGetData = enhanceGetData.bind(res);
    res.enhanceStoreData = enhanceStoreData.bind(res);
    res.enhanceAddCookie = enhanceAddCookie.bind(res);
    res.enhanceClearCookie = enhanceClearCookie.bind(res);
    next();
}

export { enhanceRequest, enhanceResponse, };

/**
 * res路由路径中暂存的参数
 * @param {Object} data
 */
function enhanceStoreData(data = {}) {
    this[STORE_DATA_KEY] = _assign(this[STORE_DATA_KEY], data); // 通过bind函数使得this指向res对象
}

/**
 * 获取res路由路径中暂存的参数
 * @returns {*|{}}
 */
function enhanceGetData() {
    return _get(this, [STORE_DATA_KEY]) || {}; // 浅拷贝，通过bind函数使得this指向res对象
}

/**
 * 设置cookie，暂时不支持动态设置cookie的属性（比如过期时间等），如有业务需要直接加第3个参数即可
 * @param cookieName cookie的key
 * @param cookieValue cookie的value
 */
function enhanceAddCookie(cookieName, cookieValue) {
    if (!_isString(cookieName) || !_isString(cookieValue)) {
        return console.error('设置cookie时必须使用字符串类型');
    }
    if (!COOKIE_CONFIG[cookieName]) {
        return console.error(`即将设置的cookie：${cookieName}在COOKIE_CONFIG没有进行配置`);
    }
    const cookieNameHttp = COOKIE_CONFIG[cookieName]['key']; // http协议中设置的cookie的名字，相当于加密
    const cookieOptions = COOKIE_CONFIG[cookieName]['options'];
    this.cookie(cookieNameHttp, cookieValue, cookieOptions); // 通过bind函数使得this指向res对象
}

/**
 * 清除cookie
 * @param cookieName cookie的key
 */
function enhanceClearCookie(cookieName) {
    if (!_isString(cookieName)) {
        return console.error('清除cookie时必须使用字符串类型');
    }
    if (!COOKIE_CONFIG[cookieName]) {
        return console.error(`即将清除的cookie：${cookieName}在COOKIE_CONFIG没有进行配置`);
    }
    const cookieNameHttp = COOKIE_CONFIG[cookieName]['key']; // http协议中设置的cookie的名字，相当于加密
    this.clearCookie(cookieNameHttp); // 通过bind函数使得this指向res对象
}

/**
 * 查询cookie
 * @param cookieName
 * @returns {*}
 */
function enhanceGetCookie(cookieName) {
    if (!_isString(cookieName)) {
        return console.error('获取cookie时必须使用字符串类型');
    }
    if (!COOKIE_CONFIG[cookieName]) {
        return console.error(`即将清除的cookie：${cookieName}在COOKIE_CONFIG没有进行配置`);
    }
    const cookieNameHttp = COOKIE_CONFIG[cookieName]['key']; // http协议中设置的cookie的名字，相当于加密
    const cookieValue = this.cookies[cookieNameHttp] || this.signedCookies[cookieNameHttp]
    return cookieValue; // 通过bind函数使得this指向req对象
}