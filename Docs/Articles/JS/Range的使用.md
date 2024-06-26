---
tags:
  - JS
---
# Range的使用

## 介绍
`Range` 接口表示一个包含节点与文本节点的一部分的文档片段。

## 创建Range的三种方式
1. 通过 `Document.createRange` 创建

    ```js
    const range = document.createRange()
    // 通过这种方式创建的range需要手动设置他的临界点
    // 详情见下方场景使用
    ```


1. 通弄过 `Selection` 对象的 `getRangeAt` 获取

    ```js
    // Selection 对象表示用户选择的文本范围或插入符号的当前位置
    // Selection 对象所对应的是用户所选择的 ranges （区域），俗称拖蓝
    const selection = window.getSelection()
    const range  = selection.getRangeAt(0)
    ```

1. 通过 `Docuemnt` 对象的构造函数 `Range()` 创建

    ```js
    const paragraphs = document.querySelectorAll('p')
    // 创建 Range 对象
    const range = new Range()
    // Range 起始位置在段落2
    range.setStartBefore(paragraphs[1])
    // Range 结束位置在段落3
    range.setEndAfter(paragraphs[2])
    // 获取 selection 对象
    const selection = window.getSelection()
    // 添加光标选择的范围
    selection.addRange(range)
    ```

## 场景使用
在富文本中我们一般常用到 `1`和 `2` 俩种方式：
* 比如得焦状态，光标在文本框内，这时候我们的内容插入在对应光标之后
    ```js
    if (!this.selection) {
      this.selection = window.getSelection()
    }
    const range = this.selection.getRangeAt(0)
    ```
* 比如失焦状态，文本框内无光标和焦点，这时候我们的内容插入应该在段末，并且光标置于段末

    ```js
    // 构造一个range
    constructRange() {
      const range = document.createRange()
      const dom = document.querySelector('#emojiInput')
      const len = dom.childNodes.length
      let idxStart = 0
      let idxEnd = 0
      let lastNode = ''
      let isAllImg = true
      if (len > 0) {
        isAllImg = this.checkDomChildIsAllImg(dom.childNodes)
        lastNode = dom.childNodes[len - 1]
        if (lastNode.nodeName === 'IMG') {
          if (isAllImg) {
            lastNode = dom
            idxStart = len
            idxEnd = len
          } else {
            idxEnd = 0
          }
        }
        if (lastNode.nodeName === '#text') {
          idxEnd = lastNode.textContent.length
        }
        if (lastNode.nodeName === 'BR') {
          lastNode = dom
        }
      } else {
        lastNode = dom
      }
      range.setStart(lastNode, idxStart)
      range.setEnd(lastNode, idxEnd)
      console.log(range)
      return range
    }
    ```

## 使用案例
请阅读[Vue实现富文本插入Emoji](/Articles/JS/Vue实现富文本插入Emoji)



## 参考
1. [Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
1. [Selection](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)
