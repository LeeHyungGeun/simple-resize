const path = require('path')
const absolutePath = _path => path.join(__dirname, '..', _path)

module.exports = {
  context: absolutePath('src'),
  app: absolutePath('src/app.js'),
  dist: absolutePath('dist'),
  public: absolutePath('public'),
  indexHtml: absolutePath('public/index.html'),
}
