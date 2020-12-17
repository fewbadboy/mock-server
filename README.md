# mock-server
express 框架实现的模拟请求返回数据

# Mock
[Mock](https://github.com/nuysoft/Mock/wiki)

## 占位符

| Type | Method |
|:----:|:----:|
| Basic | boolean, natural, integer, float, character, string, range, data, time, datatime, now|
| Image | image, dataImage |
| Color | color |
| Text | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle |
| Name | first, last, name, cfirst, clast, cname |
| Web | url, domain, email, ip, tld |
| Address | area, region |
| Helper | capitalize, upper, lower, pick, shuffle |
| Miscellaneous | id, guid |


## 扩展
```js
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"
Mock.mock({
    constellation: '@CONSTELLATION'
})
```