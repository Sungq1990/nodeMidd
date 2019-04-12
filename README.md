# nodeMidd
node中间件网关demo

前台http请求 ==> node中间层jsonRpc透传至相应服务 ==> 服务返回数据

#### start

```
yarn install

node app.js
```

#### 项目目录

```
.
├── LICENSE
├── README.md
├── app.js
├── config
│   ├── api.js
│   └── errCode.js
├── controllers
│   └── index.js
├── logs
├── package.json
├── routes
│   └── index.js
├── services
│   └── userService.js
├── utils
│   └── logger.js
└── views
    └── index.html
```

#### 备注

###### url

```
http://localhost:3000
```

###### header头

```
Content-Type: application/json
```

###### 入参

```
{
    "service": "user-service",
    "class": "getUserByToken",
    "package": "com.sungq1990.user.api.UserService",
    "token": "c4ec4bfabe4d012603f826311a0cd0bb",
    "params" : {
        "token": "testtesttest"
    }
}
```

###### 出参

成功

```
{
    "result": {
        "id": 1,
        "city": "杭州",
        "province": "浙江",
        "country": "中国",
        "token": "testtesttest",
        "updated_at": 1555071955,
        "created_at": 1555071955
    },
    "status": {
        "code": "00000",
        "message": "success",
        "reqId": "cf904a20-5d1f-11e9-9fd2-e3a24e467411",
        "runtime": "5"
    }
}
```

失败
```
{
    "result": {},
    "status": {
        "code": "10001",
        "message": "参数为空",
        "reqId": "bad855a0-5d1f-11e9-9fd2-e3a24e467411",
        "runtime": "11"
    }
}
```