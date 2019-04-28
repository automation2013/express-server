/**
 * @file 为express错误处理中间件
 * @author automation13 <1271547283@qq.com>
 */

import { Logger } from '../logger';

// lodash
import _forEach from 'lodash/forEach';

/**
 * express错误处理中间件，打印错误日志
 * @param err err对象，比如：错误栈
 * @param req express的req对象
 * @param res express的res对象
 * @param next express的res对象
 */
function enhanceErrorLog(err, req, res, next) {
    const { protocol, originalUrl, } = req;
    const host = req.get('host');
    const url = `${protocol}://${host}${originalUrl}`;
    const cookies = req.enhanceGetAllCookie();
    let cookieStr = '';
    _forEach(cookies, (value, key) => {
        cookieStr += (`${key}=${value};`);
    });
    const errorStack = err.stack;
    Logger.serverError(`url=${url}:::cookies=${cookieStr}:::errorStack=${errorStack}`);
    next(err);
}

/**
 * express错误处理中间件，兜底反馈
 * @param err err对象，比如：错误栈
 * @param req express的req对象
 * @param res express的res对象
 * @param next express的res对象
 */
function enhanceErrorRender(err, req, res, next) {
    if (req.xhr) {
        return res.status(500).send({
            errorMessage: '服务器代码出错',
        });
    }
    res.status(500).send(`
        <div style="white-space: pre-wrap; color: gray">
            <h2 style="margin: 0">服务器异常</h2>
            <h4>${err.stack}</h4>
        </div>
    `);
}
export { enhanceErrorLog, enhanceErrorRender };