let Mock = require('mockjs')
let { timeout } = require('../settings')

Mock.setup({
  timeout
})

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
    'name': '@first @middle @last',
    'cname': '@cfirst @cmiddle @clast',
    'email': '@email',
    'web': {
      'boolean': '@boolean(1,3,true)',
      'natural': '@natural(0, 100)',
      'integer': '@integer(-100, 100)',
      'float': '@float(-100, 100, 2, 3)',
      'character': `@character(${ plool })`,
      'string': `@string(${ pool }, 4, 6)`,
      'range': '@range(1, 10, 2)',
      'data': '@data',
      'time': '@time',
      'datatime': '@datatime',
      'now': '@now',
      'color': '@color',
      'image': '@image',
      'image1': '@dataImage',
      'url': '@url',
      'domain': '@domain',
      'ip': '@ip',
      'tld': '@tld',
      'area': '@area',
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
    },
    'mark': /\d{5, 10}/
  }]
})

module.exports = {
  user
}