/**
 * @file 处理未捕获异常
 * @author automation13 <1271547283@qq.com>
 */

import Logger from '../util/common/logger';

process.on('uncaughtException', (err) => {
    Logger.serverError(`uncaughtException: ${JSON.stringify(err)}`);
});

process.on('exit', (exitCode) => {
    Logger.serverError(`server exit, exitCode: ${exitCode}`);
});