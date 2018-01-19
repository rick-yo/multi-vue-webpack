'use strict'
const glob = require('glob')
const path = require('path')
const config = require('../config/')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = () => {
  return env.NODE_ENV === 'production'
}

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
// 生成html模版配置
const generateTemplate = (env) => {
  // 根据配置生成不同的html
  const templateList = [];
  const globPath = 'src/**/index.html'
  const files = glob.sync(globPath).map(item => {
    const _item = {}
    _item.filename = item.slice(4)
    _item.template = item
    _item.chunk = item.match(/src\/(\w+)\//)[1]
    return _item
  })
  files.map(item => {
    const templateConf = {
      filename: item.filename,
      template: item.template,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        chunksSortMode: 'dependency'
      },
      chunks: ((item) => {
        let chunks = [
          item.chunk,
          'manifest',
          'vendor',
        ];
        if (!isProd) {
          chunks.push('./build/dev-client')
        }
        return chunks;
      })(item)
    }
    templateList.push(
      new HtmlWebpackPlugin(templateConf)
    )
  })
  return templateList
}

//生成多入口
const getEntry = () => {
  let entries = {}
  const globPath = 'src/**/main.js'
  const files = glob.sync(globPath).map(item => {
    const key = item.match(/src\/(\w+)\//)[1]
    entries[key] = resolve(item)
  })
  return entries
}

module.exports = {
  getEntry,
  generateTemplate
}
