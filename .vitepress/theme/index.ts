import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// https://antdv.com/components/steps-cn
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// https://animate.style/
import 'animate.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(Antd)
  }
} satisfies Theme