/**
 * @file 打印日志
 * @author automation13 <1271547283@qq.com>
 */

import Logger from './logger';

// lodash
import _forEach from 'lodash/forEach';

/**
 * 打印get请求的日志
 * @param req express路由中的req对象
 */
function webGetLogger(req) {
    const { protocol, originalUrl, ips = [], httpVersion, } = req;
    const host = req.get('host');
    const userAgent = req.get('user-agent');
    const cookies = req.enhanceGetAllCookie();
    const ipStr = ips.join(';');
    let cookieStr = '';
    _forEach(cookies, (value, key) => {
        cookieStr += (`${key}=${value};`);
    });
    const url = `${protocol}://${host}${originalUrl}`;
    const logStr = `url=${url}:::cookies=${cookieStr}:::userAgent=${userAgent}:::httpVersion=${httpVersion}:::ips=${ipStr}`;
    Logger.webGet(logStr);
}

export { webGetLogger, };