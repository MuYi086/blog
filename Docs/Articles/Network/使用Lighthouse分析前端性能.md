---
tags:
  - Network
---
# 使用Lighthouse分析前端性能

## 介绍
`Lighthouse` 是一个由 `Google` 提供的工具，用于评估网站的性能和质量。它通过模拟网页在加载和交互时的行为，然后根据一系列指标来评估网页的性能表现。`google` 给我们提供了 `Lighthouse` 来分析前端性能，有对应的 `devtools` , `chrome extension`, `npm packages` 等。一些常用指标比如 `FCP` 、 `LCP` 、 `TBT` 、 `CLS` 等， 它可以帮助开发人员了解页面加载的情况，并找出潜在的性能瓶颈，从而优化网站的用户体验。

## FCP
`First Contentful Paint`，翻译为"首次内容绘制"。它是用于衡量网页加载性能的一个重要指标，指示了从页面加载开始到首次内容出现在屏幕上之间的时间。具体来说，`FCP` 表示在加载过程中浏览器第一次绘制出页面的实际内容（例如文本、图像、SVG 等），并将其显示给用户的时间。这意味着 `FCP` 是用户可以看到有意义内容的时间点，而不仅仅是页面开始加载的时间点。`FCP` 的值越小，意味着页面的首次内容呈现速度越快，用户就能越快地了解到页面的信息。因此，较低的 `FCP` 值通常被视为更好的用户体验。

## LCP
`Largest Contentful Paint` 翻译为"最大内容绘制"，它衡量的是页面上最大的有意义的内容元素在视口中可见的时间。通常情况下，这个元素可以是图片、视频、文本块或者其他 `DOM` 元素。`LCP` 测量的是用户实际看到页面上最重要内容的时间点，对于用户体验和感知来说具有重要意义。通常情况下，一个良好的 `LCP` 值应该小于 `2.5` 秒，数值越小表示页面加载速度越快，用户等待时间越短，体验也越好。

## TBT
`Total Blocking Time` 翻译为"总阻塞时间"。`TBT` 衡量的是在页面加载过程中，由于主线程被长时间的任务阻塞，导致用户输入响应时间变慢的总时间。这个指标关注的是页面加载过程中的主线程是否能够及时响应用户的交互，包括点击、滚动等操作。较高的 `TBT` 值意味着在页面加载过程中发生了长时间阻塞，使得用户在尝试与页面进行交互时会感到延迟和卡顿。通常来说，`TBT` 应该控制在100毫秒以内，大于 `300` 毫秒将被认为是需要改进的性能问题。

## CLS
`Cumulative Layout Shift` 翻译为"累积布局位移"。`CLS` 测量的是页面加载过程中发生的所有视觉布局变化的总和，这些布局变化可能导致页面上的元素位置发生改变，让用户感到困惑或者意外。`CLS` 的值可以从 `0` 到无穷大，数值越小表示页面上发生的视觉布局变化越少，用户体验越好。通常情况下，一个良好的网页应该保持 `CLS` 在 `0.1` 以下。布局位移可能会给用户带来不好的体验，比如当用户要点击某个按钮时，页面中的内容突然发生变化，导致误点击或者操作失误。为了提高用户体验，网站开发人员需要注意减少意外的布局位移，确保页面加载时的稳定性。

## windows使用
::: danger
`windows` 下执行 `lighthouse <url>` 会报错 `ChromeLauncher waiting for browser`

给官方提了 [issue](https://github.com/GoogleChrome/lighthouse/issues/15980), 等待修复
:::

## linux使用
::: danger 方法一
`deepin` 下安装 `sudo apt-get install chromium`， 执行 `lighthouse <url>` 会报错 `You are using an unsupported command-line flag: --disable-setuid-sandbox. Stability and security will suffer.`
:::

::: tip 方法二
```shell
# clone
git clone https://github.com/scheib/chromium-latest-linux

# vpn全局代理

# 进入chromium-latest-linux目录,执行update.sh
bash ./update.sh
```
:::


## 集成服务(免费)
1. [webpagetest](https://www.webpagetest.org/signup)
1. [Foo](https://www.foo.software/)
1. [websu](https://websu.io/)
1. [speedvitals](https://speedvitals.com/)

## 相关项目(开源可用)
多数项目都已过时,不能 `run`
1. [lighthouse-persist](https://github.com/foo-software/lighthouse-persist)

## 参考
1. [lighthouse github](https://github.com/GoogleChrome/lighthouse)
1. [web-vitals github](https://github.com/GoogleChrome/web-vitals)
1. [lighthouse docs](https://developer.chrome.com/docs/lighthouse/overview?hl=zh-cn)
1. [npm lighthouse](https://github.com/GoogleChrome/lighthouse)
1. [使用 Lighthouse 分析前端性能](https://zhuanlan.zhihu.com/p/376925215)
1. [How to install and use Google Lighthouse CLI](https://www.oxyplug.com/optimization/how-to-install-and-use-google-lighthouse-cli/)
1. [前端性能分析](https://keenwon.com/web-vitals/)