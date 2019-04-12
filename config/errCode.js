var errCode = {
  SERVICE_NOT_FOUND: {
    code: '999994',
    message: '服务找不到'
  },
  ESSENTIAL_PARAMS_NOT_FOUND: {
    code: '999995',
    message: '必要请求参数缺失'
  },
  ILLEGALITY_REQUEST: {
    code: '999996',
    message: '非法的请求'
  },
  ILLEGALITY_BODY: {
    code: '99997',
    message: '非法的请求body'
  },
  NOT_FOUND: {
    code: '999998',
    message: '资源找不到'
  },
  SERVER_ERR: {
    code: '999999',
    message: '服务异常'
  }
}

module.exports = errCode