## 简单使用vue事件传递
在vue开发中，经常会用到事件传递

```JS
import Vue from 'vue'
let bus = new Vue()
Vue.prototype.$eventBus = bus
export default bus
```

