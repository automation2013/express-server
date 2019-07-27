/**
 * @file 测试
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
const express = require('express');
const router = express.Router();
import jwt from 'jsonwebtoken';

import { Logger } from '../../../util/logger';

const SECRET_KEY = 'secret key for JWT'; // jwt加密生成Signature(签名)时所需要的秘钥，保存在服务端，不可泄露给客户端

router.post('/exampleJsonwebtoken', function(req, res) {
    const authorization = req.headers.authorization;
    if (!authorization) { // 设置token
        const tokenPayload = {
            username   : 'automation13',
            destination: '测试jwt',
        };
        const token = jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: '20s' }); // expiresIn：设置token过期时间，如果过期了jwt.verify会抛出异常并且被express中间件捕获
        res.json({ token, result: '设置token成功' });
    } else { // 校验token
        let token = '';
        try {
            token = authorization.match(/^Bearer (.+)/i)[1];
        } catch (e) {
            Logger.serverError(`reason=token设置错误:::authorization=${authorization}:::errorStack=${e}`);
        }
        const result = jwt.verify(token, SECRET_KEY); // result中的字段iat是jsonwebtoken自动生成的，jwt.sign设置了expiresIn则自动生成exp字段，exp - iat = expiresIn（单位是 秒）
        res.json({ token, result: `校验token结果: ${JSON.stringify(result)}` });
    }
});

export default router;