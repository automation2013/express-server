/**
 * @description  ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一 (http://eslint.cn/docs/user-guide/configuring)：
 *                      "off"   or 0  --  关闭规则
 *                      "warn"  or 1  --  开启规则，使用警告级别的错误：warn (不会导致程序退出)
 *                      "error" or 2  --  开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
module.exports = {
    /**
     * 一个环境定义了一组预定义的全局变量 (http://eslint.cn/docs/user-guide/configuring)
     */
    "env": {
        "node": true,
        "es6": true,
        "commonjs": true,
    },

    /**
     * 在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题 (http://eslint.cn/docs/rules/)
     */
    "extends": "eslint:recommended",

    /**
     * 设置解析器 (http://eslint.cn/docs/user-guide/configuring)
     */
    "parserOptions": {
        "sourceType": "module"
    },

    /**
     * 使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写 (http://eslint.cn/docs/user-guide/configuring)
     */
    "globals": {
        // "var1": true,
        // "var2": false,
        // "document": false,
        // "navigator": false,
        // "window": false,
    },

    /**
     * 启用的规则及其各自的错误级别，规则的分组和官网的分组保持一致 (http://eslint.cn/docs/rules/#nodejs-and-commonjs)
     * 参考：https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
     * 该写这个了： no-mixed-operators
     */
    "rules": {
        /**
         * Possible Errors
         * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
         */

        // 禁用 console
        "no-console": "off",
        "no-extra-parens": ["error", "functions"],
        // 禁止 function 声明出现在嵌套的语句块中
        "no-inner-declarations": ["error", "functions"],

        /**
         * Best Practices
         * 这些规则是关于最佳实践的，帮助你避免一些问题:
         */

        // 强制getter/setter成对出现在对象中
        "accessor-pairs": "error",
        // 当代码块只有一条语句时，不允许省略大括号
        "curly": "error",
        // 表达式中的点号操作符应该和对象部分在同一行
        "dot-location": ["error", "object"],
        // 要求使用 === 和 !==
        "eqeqeq": ["error", "always"],
        // 禁用 caller 或 callee
        "no-caller": "error",
        // 禁止扩展原生对象
        "no-extend-native": "error",
        // 禁止不必要的函数绑定
        "no-extra-bind": "error",
        // 禁止浮点小数，此规则目的在于消除浮动小数点，并且，当数值的小数点之前或之后缺少数字时，该规则将发出警告
        "no-floating-decimal": "error",
        // 禁用隐式的eval()
        "no-implied-eval": "error",
        // 禁用迭代器
        "no-iterator": "error",
        // 禁用标签语句
        "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
        // 禁用不必要的嵌套块
        "no-lone-blocks": "error",

        /**
         * Strict Mode
         * 该规则与使用严格模式和严格模式指令有关：
         */

        // 在 ECMAScript 模块中，总是处于严格模式语义下，严格模式指令也就没必要了。设置"sourceType": "module" 也就是说，文件是 ECMAScript 模块
        "strict": ["error", "safe"],

        /**
         * Variables
         * 这些规则与变量声明有关：
         */

        // 禁用与变量同名的标签
        "no-label-var": "error",

        /**
         * Node.js and CommonJS
         * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
         */

        // 在 Node.js 中，最普遍的处理异步行为是回调模式，这个模式期望一个 Error 对象或 null 作为回调的第一个参数。
        "handle-callback-err": ["error", "^(err|error)$" ],

        /**
         * Stylistic Issues
         * 这些规则是关于风格指南的，而且是非常主观的：
         */

        // 强制在代码块中开括号前和闭括号后有空格
        "block-spacing": ["error", "always"],
        // 大括号风格要求，将大括号放在控制语句或声明语句同一行的位置，允许块的开括号和闭括号在同一行
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        // 当命名变量时，要求使用骆驼拼写法
        "camelcase": ["error", {properties: "always"}],
        // 要求或禁止末尾逗号
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        // 强制在逗号周围使用空格，禁止在逗号前使用空格，要求在逗号后使用一个或多个空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        // 逗号风格，要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "comma-style": ["error", "last"],
        // 强制文件末尾不要有换行符
        "eol-last": ["error", "never"],
        // 禁止在函数标识符和其调用之间有空格
        "func-call-spacing": ["error", "never"],
        // 强制使用一致的缩进风格：4个空格
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "MemberExpression": 1,
            "FunctionDeclaration": { "parameters": 1, "body": 1 },
            "FunctionExpression": { "parameters": 1, "body": 1 },
            "CallExpression": { "arguments": 1 },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false,
            "ignoreComments": false
        }],
        // 要求对象字面量中的冒号和值都水平对齐
        "key-spacing": ["error", { "align": "colon" }],
        // 要求在关键字之前至少有一个空格，要求在关键字之后至少有一个空格
        "keyword-spacing": ["error", { "before": true, "after": true }],
        // 强制使用一致的换行符风格，强制使用 Unix 换行符
        "linebreak-style": ["error", "unix"],
        // 要求调用 new 操作符时有首字母大写的函数，要求调用首字母大写的函数时有 new 操作符
        "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
        // 要求调用无参构造函数时带括号
        "new-parens": "error",
        // 由于单参数的陷阱，和全局范围的 Array 可能被重定义，通常不允许使用 Array的构造函数来创建数组。唯一的例外是通过给构造函数传入指定的一个数值来创建稀疏数组。
        "no-array-constructor": "error",
        // 要求尽可能地使用单引号
        "quotes": ["error", "single"],
        // 要求在语句末尾使用分号
        "semi": ["error", "always"],

        /**
         * ECMAScript 6
         * 这些规则只与 ES6 有关, 即通常所说的 ES2015：
         */

        // 要求箭头函数体使用大括号
        "arrow-body-style": ["error", "always"],
        // 要求箭头函数的参数使用圆括号
        "arrow-parens": ["error", "always"],
        // 要求箭头函数的箭头之前或之后有空格
        "arrow-spacing": ["error", { "before": true, "after": true }],
        // 强制 generator 函数中 * 号周围使用一致的空格
        "generator-star-spacing": ["error", { "before": true, "after": true }],
    }
};