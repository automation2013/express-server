/**
 * @file 为express中间件，增加req、res的功能
 * @author automation13 <1271547283@qq.com>
 */

// lodash
import _get from 'lodash/get';
import _assign from 'lodash/assign';

const STORE_DATA_KEY = 'enhanceStoreDataKey';

/**
 * 增加express的req的功能
 * @param req express的req
 * @param res express的res
 * @param next express的next
 */
function enhanceRequest(req, res, next) {
    console.log(123);
    next();
}

/**
 * 增加express的res的功能
 * @param req express的req
 * @param res express的res
 * @param next express的next
 */
function enhanceResponse(req, res, next) {
    console.log(456);
    res.enhanceGetData = enhanceGetData.bind(res);
    res.enhanceStoreData = enhanceStoreData.bind(res);
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