---
tags:
  - 前端
---
# JS-Emoji多端统一处理

## 介绍
项目中在聊天页面，要求实现一个类似 `youtube` 的 `emoji` 功能,发送后能消息界面，多端显示一致
![显示](/Images/前端/JS-Emoji多端统一处理/bak_1.png)

## 需求分析
一个富文本框，支持输入文字，插入 `emoji` 转成 `img` ，同时在发送时转成字符串，接收消息，将字符串转成 `document node` 在页面显示

## 约定格式
```js
const dataList = [
  {
  'GroupID': 'g1',
  'Groupname_EN': 'people',
  'Groupname_CN': '人物',
  'Childrens': []
  },
  {
    'GroupID': 'g2',
    'Groupname_EN': 'nature',
    'Groupname_CN': '自然',
    'Childrens': [
      {
      'ID': 'g2_1',
      'Unicode': 'u1f436',
      'Name_CN': '狗臉',
      'Name_EN': 'dog_face',
      'Url': 'emoji_u1f436.png',
      'Group': 'g2',
      'CorlorID': '',
      'Key': '🐶'
      }
    ]
  }
]
```


## emoji类实现
```js
import { dataList } from './json'
import { Config } from '../../config/index'
import store from '../../store'
class WcEmoji {
  constructor() {
    this.findList = []
    this.list = dataList
    this.unicodeObj = {}
    this.signCode = '嗋'
    this.keyBeafore = '{e;'
    this.keyAfter = ';e}'
    this.wholeList = this.dealWholeList(dataList)
  }
  // 整理所有数据集
  dealWholeList(dataList) {
    const tempArr = []
    dataList.forEach(item => {
      if (item.Childrens && item.Childrens.length > 0) {
        tempArr.push(...item.Childrens)
      }
    })
    // 将所有unicode和url以键值对存储
    tempArr.forEach(li => {
      this.unicodeObj[li.Unicode] = li.Url
    })
    return tempArr
  }
  // 检测是否英语环境
  checkIsEn() {
    return store.state.common.language === 'en_US'
  }
  // 找出满足条件的数据集
  find(a) {
    if (this.checkIsEn()) {
      this.findList = this.wholeList.filter((item) => { return item.Name_EN.includes(a) })
    } else {
      this.findList = this.wholeList.filter((item) => { return item.Name_CN.includes(a) })
    }
    return this.checkFindList()
  }
  // 变量控制有误findList
  checkFindList() {
    return this.findList.length > 0
  }
  // 将消息字符串转成node节点
  transMsgToNode(str) {
    let count = 0
    let newStr = ''
    const matchArr = str.match(/\{e;.*?;e\}/g)
    const dealStr1 = str.replace(/\{e;.*?;e\}/g, this.signCode)
    const len = dealStr1.length
    for (let i = 0; i < len; i++) {
      if (dealStr1[i] === this.signCode) {
        // 截取出unicode字符串
        const unicodeStr = matchArr[count].match(/\{e;(.*);e\}/)[1]
        // 找出unicode对应的item
        const unicodeItem = this.findUnicodeStrToItem(unicodeStr)
        // 构造img的html
        const imgHtml = this.parseItemToImgHtml(unicodeItem)
        newStr += imgHtml
        count++
      } else {
        newStr += dealStr1[i]
      }
    }
    return newStr
  }
  // 找出每个unicode字符串对应的item
  findUnicodeStrToItem(str) {
    let item = {}
    for (let i = 0; i < this.wholeList.length; i++) {
      if (str === this.wholeList[i].Url) {
        item = this.wholeList[i]
        break
      }
    }
    return item
  }
  // 将item转换成img的html
  parseItemToImgHtml(item) {
    const imgUrl = `${Config.emojiHost}${item.Url}`
    const title = store.state.common.language === 'en_US' ? item.Name_EN : item.Name_CN
    const img = `<img src="${imgUrl}" class="emoji-img" style="width: 20px;height: 20px;vertical-align: top;" data-url="${item.Url}" title="${title}" alt="${item.ID}" />`
    return img
  }
  // 将node消息的htmlstr转换成msg
  parseNodeHtmlToMsg(el) {
    let count = 0
    let newStr = ''
    let nodeStr = el.innerHTML
    // 替换所有的&nbsp;成为空格
    nodeStr = nodeStr.replace(/&nbsp;(\s*)/g, ' ')
    // 首尾去空格
    nodeStr = nodeStr.replace(/(^\s*)|(\s*$)/g, '')
    // 如果聊天中emoji,解析成对应字符串标记
    if (nodeStr.includes('<img')) {
      const matchArr = nodeStr.match(/<img(.*?)>/g)
      const dealStr1 = nodeStr.replace(/<img(.*?)>/g, this.signCode)
      const len = dealStr1.length
      for (let i = 0; i < len; i++) {
        if (dealStr1[i] === this.signCode) {
          // 截取出unicodeurlStr字符串
          const unicodeurlArr = matchArr[count].match(/unicodeurl="(\S*)"/g)
          // 找出unicodeurlStr中的标识符
          const unicodeSign = unicodeurlArr[0].split('"')[1]
          // 构造emoji的标记体
          const imgSign = `${this.keyBeafore}${unicodeSign}${this.keyAfter}`
          newStr += imgSign
          count++
        } else {
          newStr += dealStr1[i]
        }
      }
    } else {
      newStr = nodeStr
    }
    return newStr
  }
  // 统计vNode字数(表情算一个字符)
  calVNodeCount(el) {
    let count = 0
    // 统一替换html的'<br>'标签
    const nodeStr = el.innerHTML.replace(/<br(.*?)>/g, '')
    // 如果聊天中emoji,解析成对应字符串标记
    if (nodeStr.includes('<img')) {
      const dealStr1 = nodeStr.replace(/<img(.*?)>/g, this.signCode)
      count = dealStr1.length
    } else {
      // nodeStr = this.dealBrowserKernelRichtextNull(nodeStr)
      count = nodeStr.length
    }
    // 空格算了6个字符，减去多余的5个计数
    const nbspLen = nodeStr.match(/&nbsp;(\s*)/g)
    if (nbspLen && nbspLen.length > 0) {
      count -= nbspLen.length * 5
    }
    return count
  }
  // 检查el是否全部是&nbsp;
  checkVnodeAllnbsp(el) {
    const nodeStr = el.innerHTML.replace(/<br(.*?)>/g, '')
    const str = nodeStr.replace(/&nbsp;/g, '')
    const str2 = str.replace(/\s/g, '')
    return str2.length === 0
  }
}

const Wcemoji = new WcEmoji()
export { Wcemoji }
```

## 参考
1. [unicode](https://unicode.org/emoji/charts/full-emoji-list.html)
1. [emojipedia](https://emojipedia.org/)