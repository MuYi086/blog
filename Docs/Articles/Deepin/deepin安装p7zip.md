---
tags:
  - Deepin
---
# deepin安装p7zip

## 安装
```shell
# 当前deepin23 已经内置p7zip
sudo apt-get install p7zip
```

## 解压缩
```shell
# 解压 x:解压 -r 递归 -o 指定目录,后面没有空格
7za x axx.7z -r -o./xx
# 压缩 a:添加文件 -t 指定压缩类型,默认7z
7za a xxx.7z ./xx
```


## 参考
1. [deepin安装p7zip](https://www.cnblogs.com/yiwd/p/3649094.html)