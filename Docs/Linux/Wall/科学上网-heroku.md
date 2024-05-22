# 科学上网-heroku

## 介绍
* 优点 ：每月2T流量, 能稳定访问
* 缺点 ：速度一般,能满足日常需求,刷油管速度还行

## windows
`heroku` 下载地址: [https://github.com/onplus/shadowsocks-heroku/releases](https://github.com/onplus/shadowsocks-heroku/releases)

`SwitchyOmega` 下载地址: [https://github.com/FelisCatus/SwitchyOmega/releases](https://github.com/FelisCatus/SwitchyOmega/releases)

`Windows` 下解压,编辑 `config.json` , 运行 `ss-h.exe` 

```json
{
  "server": "MuYi086.herokuapp.com", // 你创建的herokuapp的服务器地址
  "local_address": "127.0.0.1",
  "scheme": "ws",
  "local_port": "1080", // 本地监听端口:一般设为1080
  "remote_port": "80", // 远程端口:一般为80或443，以服务器设置为准
  "password": "xxxx", // 服务器密码
  "timeout": 600,
  "method": "aes-256-cfb" // 服务器加密方式
}
```

把浏览器的代理 `SwitchyOmega` 或者 `proxy` 设置成 `sock5` 代理1080端口即可

![科学上网](/Images/Linux/科学上网-让你连接互联网/internet_02.png "科学上网")

## linux/mac
`heroku` 下载地址: [https://github.com/VincentChanX/shadowsocks-over-websocket.git](https://github.com/VincentChanX/shadowsocks-over-websocket.git)

官方文档介绍了常用发行版 `debian/ubuntu` 安装 `heroku` ,但是并没有说明 `linux` 客户端使用

`google` 之后找到一个 `npm` : 使用 [shadowsocks-over-websocket](https://www.npmjs.com/package/shadowsocks-over-websocket)


安装项目并 `npm install` 之后,打开 `local.js` ，填入配置

```js
const TCPRelay = require('./tcprelay').TCPRelay
const local = require('commander')
const constants = require('./constants')
local
  .version(constants.VERSION)
  .option('-m --method <method>', 'encryption method, default: aes-256-cfb')
  .option('-k --password <password>', 'password')
  .option('-s --server-address <address>', 'server address')
  .option('-p --server-port <port>', 'server port, default: 8388')
  .option('-b --local-address <address>', 'local binding address, default: 127.0.0.1')
  .option('-l --local-port <port>', 'local port, default: 1080')
  .option('--log-level <level>', 'log level(debug|info|warn|error|fatal)', /^(debug|info|warn|error|fatal)$/i, 'info')
  .option('--log-file <file>', 'log file')
  .parse(process.argv);
var relay = new TCPRelay({
    localAddress: local.localAddress || '127.0.0.1',
    localPort: local.localPort || 1080,
    serverAddress: local.serverAddress || 'MuYi086.herokuapp.com',
    serverPort: local.serverPort || 80,
    password: local.password || 'MuYi086nihao',
    method: local.method || 'aes-256-cfb'
}, true)
relay.setLogLevel(local.logLevel)
relay.setLogFile(local.logFile)
relay.bootstrap()
```

![科学上网](/Images/Linux/科学上网-让你连接互联网/internet_03.png "科学上网")
保存,在终端 `node local.js` ，浏览器代理设置,然后可以 `google` 了

![科学上网](/Images/Linux/科学上网-让你连接互联网/internet_04.png "科学上网")

项目地址: [https://github.com/mrluanma/shadowsocks-heroku](https://github.com/mrluanma/shadowsocks-heroku)


## 参考
1. [科学上网](https://github.com/loremwalker/fq-book)
1. [heroku devcenter](https://devcenter.heroku.com/articles/heroku-cli)