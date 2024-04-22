# 解析vue指令clickoutside源码

## 介绍
工作中我们常会遇到这样的场景，点击 `Button` 显示弹窗，点击内容区域外，需要隐藏弹窗

## 分析
这里我拿 `element` 中 `clickoutside` 的源码来分析他的实现

```js
const clickoutsideContext = '@@clickoutsideContext'
export default {
  bind(el, binding, vnode) {
    // el:是我们添加指令集所在的dom元素
    // binding:一个对象,包含我们binding相关属性
    // vnode:Vue编译生成的虚拟节点
    const documentHandler = (e) => {
      // vnode.context指向我们上下文的vue实例
      if (vnode.context && el !== e.target && !el.contains(e.target)) {
        // el[clickoutsideContext].methodName 即为我们约定指令v-clickoutside后指定的方法名
        vnode.context[el[clickoutsideContext].methodName]()
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click'
    }
    document.addEventListener(el[clickoutsideContext].arg, documentHandler, false)
  },
  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression
  },
  unbind(el) {
    document.removeEventListener(
      el[clickoutsideContext].arg,
      el[clickoutsideContext].documentHandler)
  },
  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    })
  }
}
```



## 参考
1. [Vue directive](https://cn.vuejs.org/v2/guide/custom-directive.html 'Vue directive')

