/**
 * @file 为express中间件handlebars增加helper和partial，名称为了和官方的区别开来，建议以"my-xx"的格式来命名，如果不需要这些helpe和partialr则app.js中无需引用这个文件
 * @author automation13 <1271547283@qq.com>
 */

import hbs from 'hbs';

/**
 * handlebars注册自定义helper，helper名称为my-xx，在.hbs文件就中可以直接使用my-list来渲染<ul>标签了
 */
hbs.registerHelper('my-list-example', function(context, options) {
    let ret = '<ul>';
    let length = context.length;

    for (let i = 0; i < length; i++) {
        ret = ret + '<li>' + options.fn(context[i]) + '</li>';
    }

    return ret + '</ul>';
});

/**
 * handlebars注册自定义helper，helper名称为my-list，在.hbs文件就中可以直接使用my-bold来将内部内容包裹上一个<div class="mybold">标签
 */
hbs.registerHelper('my-bold-example', function(options) {
    return new hbs.SafeString(
        '<div class="mybold">'
        + options.fn(this)
        + '</div>');
});

/**
 * handlebars注册自定义partial，helper名称为my-partial-xx的形式
 */
hbs.registerPartial('my-partial-example',
    `<{{tagName}} class="body-xx">
        By {{partialExample.author.firstName}} {{partialExample.author.lastName}}
    </{{tagName}}>
    <div class="body">
        {{partialExample.body}}
    </div>`
);