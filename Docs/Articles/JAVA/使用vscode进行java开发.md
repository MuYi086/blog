---
tags:
  - JAVA
---
# 使用vscode进行java开发

## 介绍
在 `vscode` 上快速开发 `java` 我们需要先搭建环境,比如 `java` , `maven` 等

## 安装和配置java
[安装和配置java](./Java环境搭建.md)

## vscode配置
1. 安装扩展 `Java Extension Pack` 和 `Spring Boot Extension Pack`

### Linux 配置

1. 配置 `maven`
    ```shell
    # file => Prefernces => settins => 搜索maven
    ```

    ![maven配置](/Images/Shell/使用vscode进行java开发/java_01.png)

1. 填入配置( `java` 和 `maven` 目录及版本自行替换)
    ```json
    {
        "workbench.iconTheme": "vscode-icons",
        "workbench.startupEditor": "newUntitledFile",
        "java.errors.incompleteClasspath.severity": "ignore",
        "workbench.colorTheme": "Atom One Dark",
        "java.home":"/home/MuYi086/program/jdk1.8.0_231",
        "java.configuration.maven.userSettings": "/home/MuYi086/program/maven-3.6.2/conf/settings.xml",
        "maven.executable.path": "/home/MuYi086/program/maven-3.6.2/bin/mvn",
        "maven.terminal.useJavaHome": true,
        "maven.terminal.customEnv": [
            {
                "environmentVariable": "JAVA_HOME",
                "value": "/home/MuYi086/program/jdk1.8.0_231"
            }
        ],
    }
    ```

### Windows 11 配置

1. 配置 `maven`
    - 打开 VSCode 设置：`Ctrl + ,` 或「文件」→「首选项」→「设置」
    - 搜索 `maven` 进行配置

1. 填入配置（`java` 和 `maven` 目录及版本自行替换）
    ```json
    {
        "workbench.iconTheme": "vscode-icons",
        "workbench.startupEditor": "newUntitledFile",
        "java.errors.incompleteClasspath.severity": "ignore",
        "workbench.colorTheme": "Atom One Dark",
        "java.home": "C:/Program Files/Java/jdk-17",
        "java.configuration.maven.userSettings": "C:/apache-maven-3.9.6/conf/settings.xml",
        "maven.executable.path": "C:/apache-maven-3.9.6/bin/mvn.cmd",
        "maven.terminal.useJavaHome": true,
        "maven.terminal.customEnv": [
            {
                "environmentVariable": "JAVA_HOME",
                "value": "C:/Program Files/Java/jdk-17"
            }
        ]
    }
    ```

    ::: tip
    - Windows 路径可以使用正斜杠 `/` 或双反斜杠 `\\`
    - `maven.executable.path` 在 Windows 上指向 `mvn.cmd` 而不是 `mvn`
    :::

## 创建一个maven项目
```shell
View => Command Palette
```

## 连接数据库
::: code-group
```java [app.java]
package com.MuYi086.myapp;
import java.sql.*;
public class App {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String url = "jdbc:mysql://localhost:3306/test";  
    // 数据库的用户名与密码，需要根据自己的设置
    static final String user = "MuYi086";
    static final String password = "MuYi086";
    public static void main( String[] args ) {
        Connection conn = null;
        Statement stmt = null;
        try{
            // 注册 JDBC 驱动
            Class.forName(JDBC_DRIVER);
            // 打开链接
            System.out.println("连接数据库...");
            conn = DriverManager.getConnection(url, user, password);
            // 执行查询
            System.out.println(" 实例化Statement对象...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT * FROM user";
            ResultSet rs = stmt.executeQuery(sql);
        
            // 展开结果集数据库
            while(rs.next()){
                // 通过字段检索
                int height = rs.getInt("height");
                String name = rs.getString("name");
                System.out.println(String.format("height=%d, name=%s", height, name));
            }
            // 完成后关闭
            rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            // 处理 JDBC 错误
            se.printStackTrace();
        }catch(Exception e){
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 关闭资源
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }// 什么都不做
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
        System.out.println("Goodbye!");
    }
}
```
:::

## 参考
1. [Linux上Java的安装与配置](https://www.cnblogs.com/lamp01/p/8932740.html)
1. [Linux下Java和Maven的安装及配置](https://blog.csdn.net/ula_liu/article/details/80853713)
1. [VsCode搭建Java开发环境](https://www.cnblogs.com/miskis/p/9816135.html)
1. [Java mysql连接](https://www.runoob.com/java/java-mysql-connect.html)
1. [Windows 下 Java 环境变量配置](https://www.runoob.com/java/java-environment-setup.html)
1. [Windows 下 Maven 安装配置](https://www.runoob.com/maven/maven-setup.html)