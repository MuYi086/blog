# 利用charles抓包app

## 下载安装

[charles官方地址](https://www.charlesproxy.com/ 'charles官方地址')

## 抓http
1. 电脑上, `charles` 打开代理功能

    ```shell
    # Proxy—>Proxy Settings—>Proxies
    # 设置下端口号,默认是8888
    # 勾选 Enable transparent HTTP proxying
    ```

1. 电脑上，`charles` 获取本地 `ip` 地址

    ```shell
    # 方式一: help -> Local IP Address
    # 方式二: cmd -> ipconfig
    ```

1. 手机连 `wifi`（和电脑处于同一局域网）

    ```shell
    # 设置->无线局域网->当前wifi->配置代理->手动-> 填入电脑的ip和端口
    ```

1. 电脑端点击 `Allow`

    ```shell
    # 手机发起请求时,Charles会弹窗,电脑点击Allow
    ```

## 抓https
1. 安装电脑证书

    ```shell
    # Help - SSL Proxying - Install Charles Root Certificate
    ```

1. 安装手机证书

    ```shell
    # Help - SSL Proxying - Install Charles Root Certificate on Mobile Device
    # 手机连同一个wifi，safari访问https://chls.pro/ssl下载安装
    # 参考官方说明: https://www.charlesproxy.com/documentation/using-charles/ssl-certificates/
    # 设置-通用-描述文件-安装
    # 手机设置-通用-关于手机-证书信任设置

    # 如浏览器不出现下载提示,则用默认浏览器流量打开如下链接
    # https://www.charlesproxy.com/assets/legacy-ssl/charles.crt 
    ```

1. 解决接口名 `unknown` 的问题

    ```shell
    # Proxy => SSL Proxying Settings => SSL Proxying => include add 
    ```
    ![接口名unknown](/Images/Windows/利用charles抓包app/interface_unknown.png)

## 参考
1. [利用Charles抓取数据详细流程](https://www.jianshu.com/p/5c205ae5431b '利用Charles抓取数据详细流程')
1. [Charles 抓包使用教程 - Windows](https://www.cnblogs.com/peng-lan/p/11242954.html 'Charles 抓包使用教程 - Windows')
1. [Charles安装和配置HTTPS证书](https://www.jianshu.com/p/6aa52610c11f 'Charles安装和配置HTTPS证书')
1. [Charles 抓取https unknown](https://www.cnblogs.com/jingmo0319/p/13328191.html 'Charles https unknown')
1. [ios 配置了代理且使用 chls.pro/ssl 下载不了证书，无法弹出下载证书的提示](https://blog.csdn.net/LittleGiantWang/article/details/125501842 'ios 配置了代理且使用 chls.pro/ssl 下载不了证书，无法弹出下载证书的提示')