var UUID = require('node-uuid')
var userService = require('./../services/userService')
var errCode = require('./../config/errCode')
var api = require('./../config/api')

// 请求全局变量
var userId=0
var uuid
var startTime
var endTime

var Index = {
  // 服务分发
  distribute: function(req, res) {
    startTime = Date.now()
    uuid = UUID.v1()
    // 入参强校验
    if (req.body === '' || req.body === 'undefined' || req.body === undefined) {
      return Index.error(res, errCode.ILLEGALITY_BODY)
    }
    if (req.body.service === undefined || req.body.class === undefined || req.body.package === undefined ||
      req.body.service === '' || req.body.class === '' || req.body.package === '') {
      return Index.error(res, errCode.ESSENTIAL_PARAMS_NOT_FOUND)
    }
    var service = req.body.service
    var requestData = req.body.params ? req.body.params : {}
    if (!api[service]) {
      return Index.error(res, errCode.SERVICE_NOT_FOUND)
    }
    
    //jsonRpc调用指定服务
    var url = api[service] + service + '/' + req.body.package
    var postJson = {
      'id': uuid,
      'jsonrpc': '2.0',
      'method': req.body.class,
      'params': [{
        'userId': userId,
        'requestData': requestData
      }]
    }
    userService.getRes(url, postJson, function(err, data) {
      // 请求出错
      if (err || data === '') {
        return Index.error(res, errCode.SERVER_ERR)
      }
      // 框架错误
      var returnData = JSON.parse(data)
      if (returnData.error) {
        return Index.error(res, {
          'code': returnData.error.code + '',
          'message': returnData.error.message
        })
      }
      // 业务错误
      if (returnData.result && returnData.result.code !== '00000') {
        return Index.error(res, {
          'code': returnData.result.code + '',
          'message': returnData.result.message
        })
      }
      return Index.success(res, returnData)
    })
  },

  error: function(res, code) {
    endTime = Date.now();
    return res.json({
      'result': {},
      'status': Object.assign(code, {
        'reqId': uuid,
        'runtime': (endTime - startTime) + ''
      })
    })
  },

  success: function(res, data) {
    endTime = Date.now();
    return res.json({
      'result': data.result.data,
      'status': {
        'code': data.result.code + '',
        'message': data.result.message,
        'reqId': uuid,
        'runtime': (endTime - startTime) + ''
      }
    })
  }
}
module.exports = Index