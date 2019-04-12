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
  "service":"user-service",
  "class":"getUserByCondition",
  "package":"com.sungq1990.user.api.UserService",
  "token":"c4ec4bfabe4d012603f826311a0cd0bb",
  "params" : {
    "key" : "id",
    "value" : "100"
  }
}
```

###### 出参

```
{
  "result": {
    "id": 100,
    "nickName": "迟。",
    "city": "Hangzhou",
    "province": "Zhejiang",
    "country": "China",
    "updated_at": 1539946541,
    "created_at": 1539946537
  },
  "status": {
    "code": "00000",
    "message": "success",
    "reqId": "4b938f70-5cf7-11e9-ac81-57259642e1fa",
    "runtime": "33"
  }
}
```