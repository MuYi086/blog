## Vue实现富文本插入Emoji

#### 背景
项目中在聊天页面，要求实现一个类似 `youtube` 的 `emoji` 功能,发送后能多端显示一致

#### 需求分析
一个富文本框，支持输入文字，插入 `emoji` 转成 `img` ，同时在发送时转成字符串，接收消息，将字符串转成 `document node` 在页面显示

#### 难点
1. 得焦插入和失焦插入内容时光标位置计算, 参考[Range的使用](./Range%E7%9A%84%E4%BD%BF%E7%94%A8.md)
1. 富文本内容(含 `emoji` 图片)转字符串, 参考[Emoji多端统一处理](./Emoji%E5%A4%9A%E7%AB%AF%E7%BB%9F%E4%B8%80%E5%A4%84%E7%90%86.md)
1. 字符串消息转成 `html` (含 `emoji` 图片)

#### 核心代码

```html
<div
  id="emojiInput"
  ref="editor"
  :class="['emojiInput el-textarea', isallow ? '' : 'notAllow', isInFocus ? 'focus-Bk': 'not-focus', isShowBtn ? 'modify-padding' : '', htmlCount ? '' : 'emojiInputEmpty']"
  :contenteditable="isallow"
  :placeholder="$t('ModelLive.saySomeThing')"
  @keypress="stopKeyEvent"
  @click="setInputFocus"
  @blur="setInputBlur"
  @focus="getFocus"
  @keypress.enter="pressEnter"
/>
```

```JS
// 富文本插入
appendToEditor(item) {
  if (this.inputStatusCheck()) {
    return false
  }
  this.getCurrentRange()
  const unicode = item.unicode
  const doc = document.createElement('img')
  const imgSrc = `${this.Config.emojiHost}${item.Url}`
  const style = `width: ${this.emojiImgWidth}px;height: ${this.emojiImgWidth}px;vertical-align: top;`
  doc.setAttribute('src', imgSrc)
  doc.setAttribute('data-unicodeurl', item.Url)
  doc.setAttribute('class', 'img-emoji')
  doc.setAttribute('alt', unicode)
  doc.setAttribute('style', style)
  this.range.insertNode(doc)
}

// 字数超限
inputStatusCheck() {
  return this.htmlCount >= this.limitCount
}

// 观察editor触发的回调
editorChange() {
  this.getCurrentRange()
  this.updateRange()
  this.htmlCount = this.wcemojiIns.calVNodeCount(this.editor)
  this.$emit('editorChangeCount', { htmlCount: this.htmlCount, limitCount: this.limitCount })
}

// 判断点击emoji表情插入时当前的range是否在输入框内,是使用getRangeAt(0)，否则构造一个以editor最后节点开始的range
getCurrentRange() {
  if (!this.selection) {
    this.selection = window.getSelection()
  }
  const range = this.selection.getRangeAt(0)
  // 判断是否是div,如果是div判断是否是emojiInput
  if (range.commonAncestorContainer && range.commonAncestorContainer.nodeName === 'DIV') {
    if (range.commonAncestorContainer.id === 'emojiInput') {
      this.range = range
    } else {
      this.range = this.constructRange()
    }
  }
  // 判断是否是text,如果是text判断是否父节点是emojiInput
  if (range.commonAncestorContainer && range.commonAncestorContainer.nodeName === '#text') {
    if (range.commonAncestorContainer.parentNode.id === 'emojiInput') {
      this.range = range
    } else {
      this.range = this.constructRange()
    }
  }
}

// 自定义构造range
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

#### 参考
1. [HTMl DOM Range用法](https://vimsky.com/examples/usage/html-dom-range-setstart-method.html 'HTMl DOM Range用法')
1. [Selection和Range参考](https://www.cnblogs.com/kidsitcn/p/11628822.html 'Selection和Range参考')
