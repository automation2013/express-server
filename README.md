# express-server
express简单的服务器

## 工程搭建
1、使用“nodemon index.js”代替"node index.js"可以保证代码的任何更改保存后即时生效，但为了不全局安装nodemon所以在package.json的script属性中添加了自定义命令“start”（参考：https://www.npmjs.com.cn/cli/start/）


## 工程启动
1、查看node版本，确定使用V8及以上的版本
2、express-server路径下运行命令：npm start


## 涉及开源框架

#### express
|组件名|描述|参考|
---|:--:|---:
node | 使用V8及以上的版本 | http://nodejs.cn/
express | HTTP服务器 | http://www.expressjs.com.cn/
cookie-parser | 解析cookie | http://www.expressjs.com.cn/resources/middleware.html
express-session | 解析express(官网上这个插件名字叫session) | http://www.expressjs.com.cn/resources/middleware.html
body-parser | 解析http的body | http://www.expressjs.com.cn/resources/middleware.html
multer | 处理 multipart/form-data 类型的表单数据，它主要用于上传文件 | https://www.npmjs.com/package/multer
hbs | express模板引擎 | https://github.com/pillarjs/hbs

#### 公共框架
|组件名|描述|参考|
---|:--:|---:
babel.js | 解决node不能使用ES6语法 | https://www.babeljs.cn/
lodash | 是一个一致性、模块化、高性能的 JavaScript 实用工具库 | https://www.lodashjs.com/docs/4.17.5.html
log4js | node.js日志框架 | https://github.com/log4js-node/log4js-node
eslint | JavaScript静态代码检查工具（先决条件：Node.js (>=4.x), npm version 2+。 [个人测试eslint版本 >= 5.x 时需要 Node.js >= 8.x] http://eslint.cn/docs/user-guide/getting-started）| http://eslint.cn/  https://blog.csdn.net/u014390748/article/details/79477652
es-checker | 可以检测当前版本node对支持情况(工程暂未使用未安装) | https://www.jianshu.com/p/a9c27b80af9d


## 代码规范
1、代码注释规范：    JSDoc（https://www.css88.com/doc/jsdoc/tags-description.html）
                        JsDoc-support-in-JavaScript：https://github.com/Microsoft/TypeScript/wiki/JsDoc-support-in-JavaScript
                        visualstudio文档：https://code.visualstudio.com/Docs/languages/javascript

