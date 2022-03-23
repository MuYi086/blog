## Range的使用

#### 介绍
`Range` 接口表示一个包含节点与文本节点的一部分的文档片段。

#### 创建Range的三种方式
1. 通过 `Document.createRange` 创建

    ```JS
    const range = document.createRange()
    // 通过这种方式创建的range需要手动设置他的临界点
    // 详情见下方场景使用
    ```


1. 通弄过 `Selection` 对象的 `getRangeAt` 获取

    ```JS
    // Selection 对象表示用户选择的文本范围或插入符号的当前位置
    // Selection 对象所对应的是用户所选择的 ranges （区域），俗称拖蓝
    const selection = window.getSelection()
    const range  = selection.getRangeAt(0)
    ```

1. 通过 `Docuemnt` 对象的构造函数 `Range()` 创建

    ```JS
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

#### 场景使用
在富文本中我们一般常用到 `1`和 `2` 俩种方式：
* 比如得焦状态，光标在文本框内，这时候我们的内容插入在对应光标之后
    ```JS
    if (!this.selection) {
      this.selection = window.getSelection()
    }
    const range = this.selection.getRangeAt(0)
    ```
* 比如失焦状态，文本框内无光标和焦点，这时候我们的内容插入应该在段末，并且光标置于段末

    ```JS
    // 构造一个range
    constructRange() {
      const range = document.createRange()
      const dom = document.querySelector('#emojiInput')
      const len = dom.childNodes.length
      const lastNode = dom.childNodes[len - 1]
      let currentSelectNodeLen = 0
      if (lastNode.nodeName === 'IMG') {
        currentSelectNodeLen = 0
      }
      if (lastNode.nodeName === '#text') {
        currentSelectNodeLen = lastNode.textContent.length
      }
      range.setStart(lastNode, 0)
      range.setEnd(lastNode, currentSelectNodeLen)
      return range
    }
    ```

#### 使用案例
请阅读[Vue实现富文本插入Emoji](./Vue%E5%AE%9E%E7%8E%B0%E5%AF%8C%E6%96%87%E6%9C%AC%E6%8F%92%E5%85%A5Emoji.md)



#### 参考
1. [Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range 'Range')
1. [Selection](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection 'Selection')
