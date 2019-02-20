/**
 * @file express路由传递参数的方法
 * @author automation13 <1271547283@qq.com>
 */

const KEY = 'enhanceStoreData';

// lodash
import _set from 'lodash/set';
import _get from 'lodash/get';

export {
    setRouterData, // 向express的response对象中存数据
    getRouterData, // 取出express的response对象中存数据
};

/**
 * 向express的response对象中存数据
 * @param { object } res express的response对象，必传
 * @param { * } data 待存数据
 */
function setRouterData(res, data = {}) {
    _set(res, [KEY], data);
}

/**
 * 取出express的response对象中存数据
 * @param { object } res express的response对象，必传
 * @returns {*|{}}
 */
function getRouterData(res) {
    const routerData = _get(res, [KEY]) || {};
    return routerData;
}