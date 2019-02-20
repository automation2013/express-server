# express-server
express简单的服务器


工程搭建：
1、使用“nodemon index.js”代替"node index.js"可以保证代码的任何更改保存后及时生效，但为了不全局安装nodemon所以在package.json的srcrip属性中添加了自定义命令“start”（参考：https://www.npmjs.com.cn/cli/start/）


工程启动：
1、查看node版本，确定使用V8及以上的版本
2、express-server路径下运行命令：npm start


涉及开源框架：
1、node            使用V8及以上的版本（http://nodejs.cn/）
2、es-checker      可以检测当前版本node对支持情况（https://www.jianshu.com/p/a9c27b80af9d）(工程暂未使用未安装)
3、babel.js        解决node不能使用ES6语法（https://www.babeljs.cn/）
4、eslint          JavaScript静态代码检查工具（http://eslint.cn/）
                    （先决条件：Node.js (>=4.x), npm version 2+。 [个人测试eslint版本 >= 5.x 时需要 Node.js >= 8.x] http://eslint.cn/docs/user-guide/getting-started）
                    （https://blog.csdn.net/u014390748/article/details/79477652）
5、lodash          是一个一致性、模块化、高性能的 JavaScript 实用工具库（https://www.lodashjs.com/docs/4.17.5.html）
6、express         HTTP服务器（http://www.expressjs.com.cn/）
7、body-parser     express插件，解析http的body

代码规范：
1、代码注释规范：    JSDoc（https://www.css88.com/doc/jsdoc/tags-description.html）
                        JsDoc-support-in-JavaScript：https://github.com/Microsoft/TypeScript/wiki/JsDoc-support-in-JavaScript
                        visualstudio文档：https://code.visualstudio.com/Docs/languages/javascript

