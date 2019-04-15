/**
 * @file 处理未捕获异常
 * @author automation13 <1271547283@qq.com>
 */

import Logger from '../util/logger/logger';

process.on('uncaughtException', (err) => {
    const errorStack = err.stack;
    Logger.serverError(`errorType=uncaughtException:::errorStack=${errorStack}`);
});

process.on('exit', (exitCode) => {
    Logger.serverError(`server exit, exitCode: ${exitCode}`);
});