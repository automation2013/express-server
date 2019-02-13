/**
 * @description  ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一 (http://eslint.cn/docs/user-guide/configuring)：
 *                      "off"   or 0  --  关闭规则
 *                      "warn"  or 1  --  开启规则，使用警告级别的错误：warn (不会导致程序退出)
 *                      "error" or 2  --  开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
module.exports = {
    // 一个环境定义了一组预定义的全局变量 (http://eslint.cn/docs/user-guide/configuring)
    "env": {
        "node": true,
        "es6": true,
        "commonjs": true,
    },
    // 在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题 (http://eslint.cn/docs/rules/)
    "extends": "eslint:recommended",
    // 设置解析器 (http://eslint.cn/docs/user-guide/configuring)
    "parserOptions": {
        "sourceType": "module"
    },
    // 使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写 (http://eslint.cn/docs/user-guide/configuring)
    "globals": {
        // "var1": true,
        // "var2": false
    },
    // 启用的规则及其各自的错误级别，规则的分组和官网的分组保持一致 (http://eslint.cn/docs/rules/#nodejs-and-commonjs)
    "rules": {
        /**
         * Possible Errors
         * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
         */

        // 禁用 console
        "no-console": "off",

        /**
         * Best Practices
         * 这些规则是关于最佳实践的，帮助你避免一些问题:
         */

        /**
         * Strict Mode
         * 该规则与使用严格模式和严格模式指令有关：
         */

        /**
         * Variables
         * 这些规则与变量声明有关：
         */

        // 在 ECMAScript 模块中，总是处于严格模式语义下，严格模式指令也就没必要了。设置"sourceType": "module" 也就是说，文件是 ECMAScript 模块
        "strict": ["error", "safe"],

        /**
         * Node.js and CommonJS
         * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
         */

        /**
         * Stylistic Issues
         * 这些规则是关于风格指南的，而且是非常主观的：
         */

        // 要求或禁止使用拖尾逗号
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        // 强制使用一致的缩进风格：4个空格。
        "indent": ["error", 4],
        // 强制使用一致的换行符风格，强制使用 Unix 换行符
        "linebreak-style": ["error", "unix"],
        // 要求尽可能地使用单引号
        "quotes": ["error", "single"],
        // 要求在语句末尾使用分号
        "semi": ["error", "always"],

        /**
         * ECMAScript 6
         * 这些规则只与 ES6 有关, 即通常所说的 ES2015：
         */

    }
};