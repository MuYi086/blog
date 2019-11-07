## 使用vscode进行java开发

#### java安装
1. 注册oracle账号用户jdk下载  [注册](https://profile.oracle.com/myprofile/account/create-account.jspx '注册')

1. 下载jdk [java-se](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html 'java-se')

1. 新建一个目录用于安装jdk,将jdk解压复制到文件夹内
```
# username为当前用户
mkdir /home/username/java
```
1. 设置环境变量
```
sudo vim /etc/profile
# 将以下内容加到最后
set java environment
JAVA_HOME=/home/username/java/jdk1.8.0_231     
JRE_HOME=/home/username/java/jdk1.8.0_231/jre     
CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME JRE_HOME CLASS_PATH PATH
```
1. 让环境变量生效
```
source /etc/profile
```

1. 测试
```
java -version
```


#### 参考
1. [Linux上Java的安装与配置](https://www.cnblogs.com/lamp01/p/8932740.html 'Linux上Java的安装与配置')