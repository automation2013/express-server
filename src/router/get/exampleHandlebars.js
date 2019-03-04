/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

router.get('/exampleHandlebars', function(req, res) {
    res.render('example', {
        title  : 'test',
        htmlDom: '<div id="yy" class="xx">eee</div>',
        nav    : [
            { url: 'foo-url', test: true, title: 'bar', },
            { url: 'bar-url', },
        ],
        story: {
            intro: 'Before the jump',
            body : 'After the jump',
        },
        isActive  : false,
        isInactive: true,
        nav1      : [
            { url: 'http://www.xxyy.com', title: 'my xxyy', },
            { url: 'http://www.xxyyzz', title: 'my xxyyzz', },
        ],
        partialExample: {
            author: { firstName: 'Alan', lastName: 'Automation13', },
            body  : 'I Love Handlebars',
        },
    });
});

export default router;