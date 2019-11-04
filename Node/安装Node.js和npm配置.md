## 安装Node.js和npm配置
[Node官网下载](https://nodejs.org/en/)

在windows安装时记得勾选`Add to Path`,如果安装正常,可以在命令行查看输出相应版本号
```
node --version
```

#### 查看npm版本
```
npm --version
```

#### 安装cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### npm 配置显示
```
npm config list
```

#### 镜像地址替换成淘宝地址
```
npm config set registry http://registry.npm.taobao.org/
```

#### 恢复默认镜像地址
```
npm config set registry https://registry.npmjs.org/
```
