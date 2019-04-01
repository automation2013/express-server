// 日志级别默认的level: ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF (其中OFF被用来关闭日志，并不作为真正的日志分级，例如调用logger.off('some log message')无意义)。
import path from 'path';
let log4js = require('log4js');

log4js.configure({
    appenders: { // 用来指定日志的输出，例如写入文件，发送邮件，发送网络数据等。配置项中appenders必须包含type属性，用于确定使用哪一种appender
        stdout: { // 控制台输出
            type: 'stdout',
        },
        server: {
            type                : 'dateFile',
            filename            : path.join(__dirname, '../../../logs/server.log'),
            pattern             : '.yyyy-MM-dd',
            alwaysIncludePattern: true,
            compress            : true,
        },
        webGet: {
            type                : 'dateFile',
            filename            : path.join(__dirname, '../../../logs/web_get.log'),
            pattern             : '.yyyy-MM-dd',
            alwaysIncludePattern: true,
            compress            : true,
        },
        webPost: {
            type                : 'dateFile',
            filename            : path.join(__dirname, '../../../logs/web_post.log'),
            pattern             : '.yyyy-MM-dd',
            alwaysIncludePattern: true,
            compress            : true,
        },
    },
    categories: { // 设置不同日志等级存储的位置（一条日志允许对应多个appender，即存放在多个位置）
        default: {
            appenders: ['stdout'],
            level    : 'ALL',
        },
        server: {
            appenders: ['stdout', 'server'],
            level    : 'ALL',
        },
        webGet: {
            appenders: ['stdout', 'webGet'],
            level    : 'ALL',
        },
        webPost: {
            appenders: ['stdout', 'webPost'],
            level    : 'ALL',
        },
    },
});

let loggerServer = log4js.getLogger('server'); // 服务器的日志：启动日志，错误日志什么的
let loggerWebGet = log4js.getLogger('webGet'); // 浏览器的get请求
let loggerWebPost = log4js.getLogger('webPost'); // 浏览器的post请求

/**
 * log4js日志
 */
class Logger {
    /**
     * 打印服务器普通信息，日志level：INFO
     * @param {string} info
     */
    static serverInfo(info = '') {
        loggerServer.info(info);
    }

    /**
     * 打印服务器错误信息，日志level：ERROR
     * @param {string} info
     */
    static serverError(info = '') {
        loggerServer.error(info);
    }

    /**
     * 打印服务器收到的get请求，日志level：INFO
     * @param {string} info
     */
    static webGet(info = '') {
        loggerWebGet.info(info);
    }

    /**
     * 打印服务器收到的post请求，日志level：INFO
     * @param {string} info
     */
    static webPost(info = '') {
        loggerWebPost.info(info);
    }
}

export default Logger;