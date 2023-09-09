## 前后端启用https

#### 背景
自从 `chrome` 在2021年推出了 `HTTPS-First` 模式后, 访问不支持该协议的网站会显示整页预警，同时也驱动者互联网网站相继进行更迭。随着时代的进步，我们在开发环境也面临着更多的需求，比如调试诸多的第三方服务( `OAuth` 等),显然本地 `http` 已经不能满足了，于是我们建议在开发环境也引入 `https` ,除了方便开发调试,这样也能更好的模拟出真实线上环境.

#### HTTPS介绍
`https` 协议指的是 `http + TLS` , 他之所以安全是因为传输过程中对数据进行了加密.

#### 对称算法和非对称算法
对称算法: 能通过一个秘钥，双向加密和解密的算法称为对称算法(`RC2`, `Base64`)
非对称算法: 需要通过一对秘钥（公钥加密，私钥解密）加密和解密的算法称为非对称算法(`MD5`, `HASH` , `RSA`)

#### HTTPS流程
1. 客户端下载服务端的数字证书(包含加密公钥)
1. 客户端随机生成一个值(内容秘钥),通过数字证书中预设的公钥(传输公钥) 进行加密后传输给服务端
1. 服务端接收到信息后，用(传输私钥) 进行解密获得内容秘钥.之后双方基于这个内容私钥通过对称算法进行内容的加密和解密(用对称算法的原因是因为开销小),传输还是通过非对称算法进行加密解密(性能开销大，但是更安全)
一般浏览器中会预置一些权威 `CA`（权威证书颁发机构）的证书，这样浏览器可以直接进行访问。如果是自己制作的证书那么会跳下面这个界面，需要信任后才能访问
![https warning](/images/js/前后端启用https/https_step_1.png 'https warning')

#### 证书制作
一般而言，我们可以在域名服务商那里申请证书,但是有门槛和时间限制。为了方便，我们一般使用 `openssl` 或者 `cloudflare` 来申请证书.
请先参考如下文档 [安装Openssl](../Windows/%E5%AE%89%E8%A3%85Openssl.md)

1. 生成私钥
    ```SHELL
    openssl genrsa -out private_key.pem 1024
    ```

1. 用私钥生成证书申请文件
    ```SHELL
    openssl req -new -out ca-req.csr -key private_key.pem
    ```

1. 用私钥对申请文件签名生成证书
    ```SHELL
    openssl x509 -req -in ca-req.csr -out ca-cert.pem -signkey private_key.pem -days 3650
    ```
可以看到目录下已经生成三个文件
![证书](/images/js/前后端启用https/https_step_2.png '证书')

#### 后端启用https
简单代码结构
```SHELL
# app.js
const Koa =  require('koa')
const https = require('https')
const fs = require('fs')
# 因为这里我使用的koa,为了更方便,使用了koa-sslify强制转换为https
const sslify = require('koa-sslify').default
...

const app = new Koa()
# 读取私钥和证书
const sslOptions = {
  key: fs.readFileSync('./server/ssl/private_key.pem'), // 私钥
  cert: fs.readFileSync('./server/ssl/ca-cert.pem') // 证书
}
app.use()
# 接上面的sslify
app.use(sslify())
...
https.createServer(sslOptions, app.callback()).listen(3001, () => {
  console.log('server running success at 3001')
})
```

#### 前端启用https
参考 `Vite` 文档,先安装 `@vitejs/plugin-basic-ssl` , 然后配置在 `plugins` 里
```SHELL
# vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  ...
  plugins: [
    basicSsl()
  ]
}
```

#### 参考
1. [koa-https](https://www.jianshu.com/p/86a92923c981 'koa-https')
1. [node应用本地https](https://www.albertaz.com/blog/nodejs-local-https 'node应用本地https')
1. [How to create an HTTPS server in localhost](https://www.leohuynh.dev/blog/use-https-in-local-development/ 'How to create an HTTPS server in localhost')
1. [Vite启用https](https://cn.vitejs.dev/config/server-options.html#server-https 'Vite启用https')
