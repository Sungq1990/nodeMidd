var errCode = require('./../config/errCode')
var request = require('request')

var Index = {
  getRes: function (url, postJson, callback) {
    var options = {
      url: url,
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postJson)
    }

    request(options, function (error, response) {
      if (!error) {
        callback(null, response.body)
      } else {
        callback(true, errCode.SERVER_ERR)
      }
    })
  }
}

module.exports = Index