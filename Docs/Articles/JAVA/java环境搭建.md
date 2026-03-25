---
tags:
  - JAVA
---
# Java环境搭建

## 安装Java 17和配置环境变量

### linux/mac

  ```shell
  # 1. 更新软件包列表
  sudo apt update

  # 2. 安装 OpenJDK 17
  sudo apt install openjdk-17-jdk -y

  # 3. 验证安装
  java -version

  # 4. 查找 Java 安装路径
  cd /usr/lib/jvm
  ls
  # 应该能看到类似：java-17-openjdk-amd64

  # 5. 编辑环境变量文件
  sudo nano ~/.bashrc

  # 6. 在文件末尾添加以下内容（根据实际目录名修改）：
  export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
  export PATH=$PATH:$JAVA_HOME/bin

  # 7. 保存并退出（Ctrl+X，然后 Y，回车）

  # 8. 使配置生效
  source ~/.bashrc

  # 9. 验证环境变量
  echo $JAVA_HOME
  ```

### windows

1. 下载 `jdk` [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 或 [OpenJDK](https://adoptium.net/)

1. 运行安装程序，建议安装到默认路径或自定义路径（如 `C:\Program Files\Java\jdk-17`）

1. 设置环境变量
    - 右键点击「此电脑」→「属性」→「高级系统设置」→「环境变量」
    - 在「系统变量」区域点击「新建」，添加 `JAVA_HOME`：
        - 变量名：`JAVA_HOME`
        - 变量值：`C:\Program Files\Java\jdk-17`（根据实际安装路径调整）
    - 找到「系统变量」中的 `Path`，点击「编辑」→「新建」，添加：
        - `%JAVA_HOME%\bin`
        - `%JAVA_HOME%\jre\bin`（JDK 8 及以下版本）

1. 测试
    ```cmd
    java -version
    javac -version
    ```

## 安装 Maven和配置环境变量

### linux/mac

  ```shell
  # 方式一：使用 apt 安装（推荐，简单）
  sudo apt install maven -y

  # 验证安装
  mvn -version

  # 方式二：手动安装最新版
  # 1. 下载 Maven 3.9.x
  wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz

  # 2. 解压
  tar -xzf apache-maven-3.9.6-bin.tar.gz

  # 3. 移动到系统目录
  sudo mv apache-maven-3.9.6 /opt/

  # 4. 配置环境变量
  sudo nano ~/.bashrc

  # 在文件末尾添加：
  export MAVEN_HOME=/opt/apache-maven-3.9.6
  export PATH=$PATH:$MAVEN_HOME/bin

  # 5. 保存并生效
  source ~/.bashrc

  # 6. 验证
  mvn -version
  ```

### windows

1. 官网 [下载](http://maven.apache.org/download.cgi) 最新版（推荐 `apache-maven-3.9.x-bin.zip`）

1. 解压到目标目录，如 `C:\apache-maven-3.9.6`

1. 设置环境变量
    - 右键点击「此电脑」→「属性」→「高级系统设置」→「环境变量」
    - 在「系统变量」区域点击「新建」，添加 `MAVEN_HOME`：
        - 变量名：`MAVEN_HOME`
        - 变量值：`C:\apache-maven-3.9.6`（根据实际解压路径调整）
    - 找到「系统变量」中的 `Path`，点击「编辑」→「新建」，添加：
        - `%MAVEN_HOME%\bin`

1. 测试
    ```cmd
    mvn -v
    ```

1. 配置本地仓库（可选）
    - 打开 `%MAVEN_HOME%\conf\settings.xml`
    - 修改本地仓库路径（默认在用户目录下的 `.m2` 文件夹）：
    ```xml
    <localRepository>D:/maven-repo</localRepository>
    ```
