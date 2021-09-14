## 键盘事件与KeyBoardWrapper交互

#### 场景
用遥控器控制网页浏览

#### 原理
1. 实现一个 `KeyBoard.js` 类库
1. 创造一个 `KeyBoardWrapper` 组件,每个组件生成对应的坐标信息和唯一 `id`
1. `KeyBoardWrapper` 组件生成的实例交由 `KeyBoard` 维护
1. 执行 `keyup` 事件分发,结合四条边坐标算出最近的实例
1. 操作该实例上的方法

#### KeyBoard.js

```JS
const KeyBoard = {
  allNode: [], // 页面所有keyBoardWrapper节点
  allNodePos: [], // 所有实例的中心坐标信息
  isInDialog: false, // 当前focus是否处在dialog状态
  addDialogNodePos: [], // 处于dialog状态所有实例的中心坐标信息
  fitDirectionNodePos: [], // 符合当前操作方向的中心坐标信息
  perfectNodeInfo: {}, // 方向操作后最佳的节点信息
  currentOperateNodeInfo: {}, // 当前正在操作的节点信息
  currentOperateVNode: {}, // 当前正在操作的vNode
  scaleLen: 10, // 这里要加入模糊距离,暂定10px，因为在选中状态，scale大于1，当前块的左侧可能比符合匹配的块右侧更小
  // 解键盘的key值
  keyup (e) {
    let obj = e.srcElement.dataset
    this.main(e.keyCode, obj)
  },
  // click进入,找到最近满足的节点
  click (e) {
    // 对path冒泡
    let obj = {} 
    for (let i = 0; i < e.path.length; i++) {
      if (e.path[i].dataset && e.path[i].dataset.kbwid) {
        obj = e.path[i].dataset
        break
      }
    }
    if (obj.kbwid) {
      this.excute(obj.kbwid)
    } else {
      console.log('未找到节点')
    }
  },
  // 主方法: 传递节点，发射事件
  main (keyCode, obj) {
    switch (keyCode) {
      // 上
      case 38:
      // 下
      case 40:
      // 左
      case 37:
      // 右
      case 39:
        this.commonFn(keyCode, obj)
        break
      // 返回
      case 8:
        this.clickBackAndEnter(obj)
        this.currentOperateVNode.back()
        break
      // enter
      case 13:
        this.clickBackAndEnter(obj)
        this.currentOperateVNode.enter()
        break
      default:
        break
    }
  },
  // 统一方法: 上下左右
  commonFn (keyCode, obj) {
    // 找出当前正在操作的节点信息
    this.currentOperateNodeInfo = this.findCurrentOperateNodeInfo(obj.kbwid)
    // 找出当前正在操作的vNode
    this.currentOperateVNode = this.findCurrentOperateVNode(obj.kbwid)
    // 找出符合当前操作方向的所有节点
    if (this.isInDialog) {
      this.fitDirectionNodePos = this.findFixDirectionNodePos(keyCode, this.addDialogNodePos, this.currentOperateNodeInfo)
    } else {
      this.fitDirectionNodePos = this.findFixDirectionNodePos(keyCode, this.allNodePos, this.currentOperateNodeInfo)
    }
    // 计算并更新符合方向所有节点与当前节点位置关系
    this.fitDirectionNodePos = this.calAllNodeDistance(keyCode, this.fitDirectionNodePos, this.currentOperateNodeInfo)
    // 找出符合当前操作方向最优节点的kbwid
    let perfectId = ''
    if (this.fitDirectionNodePos.length > 0) {
      perfectId = this.findPerfectVnodeId(this.fitDirectionNodePos)
    } else {
      perfectId = this.currentOperateNodeInfo.kbwid
    }
    console.log(perfectId)
    console.log(this.allNode)
    console.log(this.allNodePos)
    console.log(this.fitDirectionNodePos)
    // 操作最优节点执行动作
    this.excute(perfectId)
  },
  // back和enter点击事件
  clickBackAndEnter (obj) {
    // 找出当前正在操作的节点信息
    this.currentOperateNodeInfo = this.findCurrentOperateNodeInfo(obj.kbwid)
    // 找出当前正在操作的vNode
    this.currentOperateVNode = this.findCurrentOperateVNode(obj.kbwid)
    this.currentOperateVNode.isActive = true
    this.currentOperateVNode.$el.focus()
  },
  // 找到对应的实例执行方法
  excute (perfectId) {
    let vNode = {}
    for (let i = 0; i < this.allNode.length; i++) {
      if (this.allNode[i].kbwid === perfectId) {
        vNode = this.allNode[i]
        vNode.isActive = true
        vNode.$el.focus()
      } else {
        vNode = this.allNode[i]
        vNode.isActive = false
      }
    }
  },
  // 每次keyBoardWrapper创建时传入自身实例
  create (e) {
    this.allNode.push(e)
    const pos = this.storePos(e)
    this.allNodePos.push(pos)
    if (e.isInDialog) {
      this.addDialogNodePos.push(pos)
    }
  },
  // 每次keyBoardWrapper销毁时
  destroy (e) {
    // 从数组中删除自身实例
    for (let i = 0; i < this.allNode.length; i++) {
      if (this.allNode[i].kbwid === e.kbwid) {
        this.allNode.splice(i, 1)
        break
      }
    }
    // 删除自身坐标
    for (let j = 0; j < this.allNodePos.length; j++) {
      if (this.allNodePos[j].kbwid === e.kbwid) {
        this.allNodePos.splice(j, 1)
        break
      }
    }
    // 删除带isInDialog标记坐标
    if (e.isInDialog) {
      for (let j = 0; j < this.addDialogNodePos.length; j++) {
        if (this.addDialogNodePos[j].kbwid === e.kbwid) {
          this.addDialogNodePos.splice(j, 1)
          break
        }
      }
    }
  },
  // 所有页面默认第一个实例设置为active
  firstSetActive () {
    if (this.allNode.length > 0) {
      this.allNode[0].isActive = true
      this.allNode[0].$el.focus()
    }
  },
  // 存储所有实例坐标信息
  // 新方式使用4条边的中点坐标
  storePos (e) {
    const el = e.$el
    const offsetWidth = el.offsetWidth
    const offsetHeight = el.offsetHeight
    const offsetTop = el.offsetTop
    const offsetLeft = el.offsetLeft
    const kbwid = e.kbwid
    // 上边中点
    const upCenter = { x: offsetLeft + offsetWidth / 2, y: offsetTop }
    // 下边中点
    const downCenter = { x: offsetLeft + offsetWidth / 2, y: offsetTop + offsetHeight }
    // 左边中点
    const leftCenter = { x: offsetLeft, y: offsetTop + offsetHeight / 2 }
    // 右边中点
    const rightCenter = { x: offsetLeft + offsetWidth, y: offsetTop + offsetHeight / 2 }
    const pos = { upCenter, downCenter, leftCenter, rightCenter, kbwid }
    return pos
  },
  // 计算俩点间距离(勾股定理)
  calTwoPointDistance (a, b) {
    const straightLen_1 = Math.abs(a.x - b.x)
    const straightLen_2 = Math.abs(a.y - b.y)
    const slashLen = Math.sqrt(Math.pow(straightLen_1, 2) + Math.pow(straightLen_2, 2))
    return slashLen
  },
  // 找出当前正在操作的节点
  findCurrentOperateNodeInfo (kbwid) {
    let currentOperateNodeInfo = {}
    for (let i = 0; i < this.allNodePos.length; i++) {
      if (this.allNodePos[i].kbwid === kbwid) {
        currentOperateNodeInfo = this.allNodePos[i]
        break
      }
    }
    return currentOperateNodeInfo
  },
  // 找出当前正早操作的vNode
  findCurrentOperateVNode (kbwid) {
    let currentOperateVNode = {}
    for (let i = 0; i < this.allNode.length; i++) {
      if (this.allNode[i].kbwid === kbwid) {
        currentOperateVNode = this.allNode[i]
        break
      }
    }
    return currentOperateVNode
  },
  // 计算所有节点与当前节点的位置关系
  calAllNodeDistance (keyCode, arr, currentOperateNodeInfo) {
    console.log(arr)
    console.log(currentOperateNodeInfo)
    switch (keyCode) {
      // 上
      case 38:
        return arr.map((e) => {
          e.distance = this.calTwoPointDistance(e.downCenter, currentOperateNodeInfo.upCenter)
          return e
        })
        break
      // 下
      case 40:
        return arr.map((e) => {
          e.distance = this.calTwoPointDistance(e.upCenter, currentOperateNodeInfo.downCenter)
          return e
        })
        break
      // 左
      case 37:
        return arr.map((e) => {
          e.distance = this.calTwoPointDistance(e.rightCenter, currentOperateNodeInfo.leftCenter)
          return e
        })
        break
      // 右
      case 39:
        return arr.map((e) => {
          e.distance = this.calTwoPointDistance(e.leftCenter, currentOperateNodeInfo.rightCenter)
          return e
        })
        break
      default:
        break
    }
  },
  // 找出距离最优的实例id
  findPerfectVnodeId (arr) {
    let smDis = arr[0].distance
    let smId = arr[0].kbwid
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].distance < smDis) {
        smDis = arr[i].distance
        smId = arr[i].kbwid
      }
    }
    return smId
  },
  // 找出符合当前操作方向的所有中心坐标
  // 注意:这里要加入模糊距离,暂定20px，因为在选中状态，当前块的左侧可能比符合匹配的块右侧更小
  findFixDirectionNodePos (keyCode, allNodePos, currentOperateNodeInfo) {
    let fitDirectionNodePos = []
    switch (keyCode) {
      // 上
      case 38:
        for (let i = 0; i < allNodePos.length; i++) {
          if (allNodePos[i].downCenter.y < currentOperateNodeInfo.upCenter.y + this.scaleLen) {
            fitDirectionNodePos.push(allNodePos[i])
          }
        }
        break
      // 下
      case 40:
        for (let i = 0; i < allNodePos.length; i++) {
          if (allNodePos[i].upCenter.y > currentOperateNodeInfo.downCenter.y - this.scaleLen) {
            fitDirectionNodePos.push(allNodePos[i])
          }
        }
        break
      // 左
      case 37:
        for (let i = 0; i < allNodePos.length; i++) {
          if (allNodePos[i].rightCenter.x < currentOperateNodeInfo.leftCenter.x + this.scaleLen) {
            fitDirectionNodePos.push(allNodePos[i])
          }
        }
        break
      // 右
      case 39:
        for (let i = 0; i < allNodePos.length; i++) {
          if (allNodePos[i].leftCenter.x > currentOperateNodeInfo.rightCenter.x - this.scaleLen ) {
            fitDirectionNodePos.push(allNodePos[i])
          }
        }
        break
      default:
        break
    }
    return fitDirectionNodePos
  },
  // 标记是否处在dialog状态: 用于控制此时上下左右的区域限制
  changeDialogStatus (e) {
    this.isInDialog = e
  }
}
export { KeyBoard }
```

#### KeyBoardWrapper.vue

```JS
<template>
  <div 
    :class="isActive ? 'active component keyBoardWrapper' : 'component keyBoardWrapper'"
    :style="myStyle"
    :tabindex="keyIdx"
    :data-kbwid="kbwid">
    <!-- 插槽：显示自定义内容 -->
    <slot></slot>
  </div>
</template>

<script>
import { config, utilFn, KeyBoard } from '../../untils/index'
export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    keyIdx: {
      type: Number,
      default: 0
    },
    // postcss不支持行内样式
    myStyle: {
      type: String,
      default: ''
    },
    isInDialog: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  computed: {},
  watch: {
    'isActive': function (newObj) {
      this.vNodeFocus(newObj)
    }
  },
  data () {
    return {
      staticHost: config.staticHost,
      defaultImg: config.defaultImg,
      assets: config.defaultImg.assets,
      kbwid: '',
      isActive: false
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.kbwid = utilFn.createKeyWrapperId()
    // 将实例传入KeyBoard
    KeyBoard.create(this)
    // 通知keyBoard是否处在dialog
    KeyBoard.changeDialogStatus(this.isInDialog)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {
    // 将KeyBoard对应实例销毁
    KeyBoard.destroy(this)
  },
  methods: {
    // 确认
    enter (e) {
      // 使用$parent传值
      this.transToParent()
      this.$emit('enter', null)
    },
    // 返回
    back (e) {
      this.$emit('back', e)
    },
    // 节点focus
    vNodeFocus (e) {
      // 这里只有当前节点和下一节点会触发watch isActive, 
      if (e) {
        // 得焦
        this.transToParent()
        this.$emit('focus', { e, keyIdx: this.keyIdx })
      } else {
        // 失焦
        this.$emit('blur', { e, keyIdx: this.keyIdx })
      }
    },
    // 给父组件传值
    transToParent () {
      let currentOperateObj = {}
      if (this.$parent.hasOwnProperty('currentOperateObj')) {
        currentOperateObj = {...this.item, kbwid: this.kbwid }
      }
      this.$parent.currentOperateObj = currentOperateObj
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
```

#### 使用

```JS
<KeyBoardWrapper
  v-for="(item, index) in beaforeOptions"
  :item="item"
  :key="index"
  :keyIdx="index"
  :myStyle="beaforeStyle"
  @enter="beaforeEnter"
  @back="beaforeBack">
  <div class="group">
    <span :class="'iconfont ' + item.icon "></span>
    <span class="tips">{{item.label}}</span>
  </div>
</KeyBoardWrapper>
```

#### 参考