# node安装报错Unexpected-token

## 起因
今天调试公司一个祖传项目项目时，对 `node` 版本有要求，需要大于 `16.9.0` ,于是用 `nvm` 安装了最新版的 `16.14` ,然后在安装依赖 `npm i` 时报错了，提示  `Unexpected token '.'`

## 结果
尝试通过搜索引擎搜索关键字，发现有博主遇到过同样问题，最终问题定位再 `nvm` 上，最新版本已经修复了这个 `bug` ，去 [nvm-windows github](https://github.com/coreybutler/nvm-windows/releases 'nvm-windows') 下载最新安装包即可

## 注意
重新安装 `nvm` 后需要 `uninstall` 之前的 `node` 版本，然后重新 `install` ，这时候再 `npm i` 就正常了

## 参考
1. [npm下载包时报错 Unexpected token '.'问题解决](https://segmentfault.com/a/1190000041492116 'npm下载包时报错 Unexpected token "."问题解决')
1. [nvm-windows](https://github.com/coreybutler/nvm-windows 'nvm-windows')
