/**
 * @file 处理未捕获异常
 * @author automation13 <1271547283@qq.com>
 */

process.on('uncaughtException', (err) => {
    console.log(err);
});