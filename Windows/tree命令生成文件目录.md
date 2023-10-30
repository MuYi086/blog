## tree命令生成文件目录

#### 起因
我们经常碰到在 `readme` 更新项目目录结构的需求,但是有时候使用的是不同的操作系统,使用的命令参数也不同,这里分别记录`windows` 和 `linux` 下使用 `tree` 命令生产文件目录的过程

#### windows生成文件目录
```SHELL
# 进入CMD
# 切换到项目具体盘符,我这里是D盘
D:
# 查看找到对应文件目录
dir
# 进入具体目录
cd ./xxx
# 删除node_modules目录
rd /s ./xxx
# 生成tree结构 
# /f 显示每个文件中文件的名称
# /? 查看其他参数
# 输出到tree.txt文件
tree /f > tree.txt
```

#### linux生成文件目录
```SHELL
# 获取命令帮助
tree --help
# -f 表示打印完整路径
# -d 表示只打印目录,不打印文件
# -i 表示省略前面的横线
tree -a --noreport -o tree.txt
```

#### 参考
1. [windows CMD生成文件夹树状图（tree）命令](https://cloud.tencent.com/developer/article/2108238 'windows CMD生成文件夹树状图（tree）命令')
1. [Linux命令之tree命令](https://blog.csdn.net/carefree2005/article/details/132205901 'Linux命令之tree命令')