let Mock = require('mockjs')
let { timeout } = require('../settings')

// Mock.setup({
//   timeout
// })

// 返回字符的随机线程池
const pool = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!@#$%^&*()[]"
}

let user = Mock.mock({
  'data|10-15': [{
    'id|+1': 1,
    'name': '@first @last',
    'cname': '@cfirst @clast',
    'email': '@email',
    'attr': {
      'boolean': '@boolean',
      'natural': '@natural',
      'integer': '@integer',
      'float': '@float',
      'character': '@character',
      'string': '@string',
      'range': '@range',
      'date': '@date',
      'time': '@time',
      'datetime': '@datetime',
      'now': '@now',
      'color': '@color',
      'image': '@image',
      // 'image1': '@dataImage',
      'url': '@url',
      'domain': '@domain',
      'ip': '@ip',
      'tld': '@tld',
      'county': '@county(true)',
      'region': '@region',
      'id': '@id',
      'guid': '@guid',
      'paragraph': '@paragraph',
      'sentence': '@sentence',
      'word': '@word',
      'title': '@title',
      'cparagraph': '@cparagraph',
      'csentence': '@csentence',
      'cword': '@cword',
      'ctitle': '@ctitle'
    }
  }]
})

module.exports = {
  user
}