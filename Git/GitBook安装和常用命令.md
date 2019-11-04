## GitBook安装和常用命令
#### 安装GitBook
```
npm install gitbook-cli -g
```

查看是否安装成功:
```
gitbook -v
```

#### gitbook使用
编写`README.md`和`SUMMARY.md`

#### 初始化GitBook
```
gitbook init
```

#### 配置文件install
```
gitbook install ./
```

#### 本地预览
```
gitbook serve
```

预览页面`http://localhost:4000`

#### 输出pdf
全局安装`gitbook-pdf`
```
sudo npm install gitbook-pdf -g
gitbook pdf
```

#### 编译GitBook
```
gitbook build
```