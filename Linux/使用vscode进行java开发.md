## 使用vscode进行java开发

#### 前言
在vscode上快速开发java我们需要先搭建环境,比如java,maven等

#### 安装java
1. 注册`oracle`账号用户jdk下载  [注册](https://profile.oracle.com/myprofile/account/create-account.jspx '注册')

1. 下载`jdk` [java-se](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html 'java-se')

1. 新建一个目录用于安装`jdk`,将`jdk`解压复制到文件夹内
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

#### 安装maven
1. 官网 [下载](http://maven.apache.org/download.cgi '下载') 最新版

1. 新建一个目录用户安装maven,将文件解压复制到文件夹内
    ```
    # username 为当前用户
    mkdir /home/ougege/maven
    ```

1. 设置环境变量
    ```
    sudo vim /etc/profile
    # 将以下内容加到最后:注意之前java的export调整了
    JAVA_HOME=/home/ougege/program/jdk1.8.0_231      
    JRE_HOME=/home/ougege/program/jdk1.8.0_231/jre   
    CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
    PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

    MAVEN_HOME=/home/ougege/program/maven-3.6.2
    PATH=${PATH}:${MAVEN_HOME}/bin
    export JAVA_HOME JRE_HOME CLASS_PATH PATH MAVEN_HOME
    ```

1. 让环境变量生效
    ```
    source /etc/profile
    ```

1. 测试
    ```
    mvn -v
    ```

#### vscode配置
1. 安装扩展Java Extension Pack 和 Spring Boot Extension Pack
1. 配置maven
```
# file => Prefernces => settins => 搜索maven
```
![maven配置](../images/linux/使用vscode进行java开发/java_01.png)

1. 填入配置(java和maven目录及版本自行替换)
```
{
    "workbench.iconTheme": "vscode-icons",
    "workbench.startupEditor": "newUntitledFile",
    "java.errors.incompleteClasspath.severity": "ignore",
    "workbench.colorTheme": "Atom One Dark",
    "java.home":"/home/ougege/program/jdk1.8.0_231",
    "java.configuration.maven.userSettings": "/home/ougege/program/maven-3.6.2/conf/settings.xml",
    "maven.executable.path": "/home/ougege/program/maven-3.6.2/bin/mvn",
    "maven.terminal.useJavaHome": true,
    "maven.terminal.customEnv": [
        {
            "environmentVariable": "JAVA_HOME",
            "value": "/home/ougege/program/jdk1.8.0_231"
        }
    ],
}
```

#### 创建一个maven项目
```
View => Command Palette
```

#### 参考
1. [Linux上Java的安装与配置](https://www.cnblogs.com/lamp01/p/8932740.html 'Linux上Java的安装与配置')
1. [Linux下Java和Maven的安装及配置](https://blog.csdn.net/ula_liu/article/details/80853713 'Linux下Java和Maven的安装及配置')
1. [VsCode搭建Java开发环境](https://www.cnblogs.com/miskis/p/9816135.html 'VsCode搭建Java开发环境')