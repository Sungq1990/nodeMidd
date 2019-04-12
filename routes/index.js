var index = require('./../controllers/index')
module.exports = (app) => {
  // 透传
  app.post('/', index.distribute)
}