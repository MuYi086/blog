## 安装Openssl

#### 背景
无他,为了 `https`

#### windows安装Openssl环境
先下载 [openssl windows](https://slproweb.com/products/Win32OpenSSL.html)
建议下载完整版，我这里选择的是 `Win64 OpenSSL v3.1.2` ，毕竟嫌麻烦，怕 `light`轻量版少东西.

1. 安装时可以将路径设置在 `bin` 目录

    ```SHELL
    # 我的目录是
    C:\Program Files\OpenSSL-Win64\bin
    ```

1. 设置环境变量

    这一步和配置 `java` 环境类似
    ```SHELL
    # 我的电脑 => 右键[属性] => [高级系统设置] => [环境变量] => [系统变量] => Path => 新建
    # 填入上面安装设定的目录,并保存
    ```

1. 验证是否成功

    打开 `bash` 或者 `cmd`
    ```SHELL
    # 输入 openssl version
    # 正常显示版本号即成功
    ```

#### linux安装Openssl环境
最近在玩 `AI` 绘画, `Stable Diffusion` 确实太吃性能和硬盘了,所以把双系统格了装回了`windows` ，还没有在 `linux` 上尝试 `Openssl` 环境，毕竟太多发行版，后续有空了再补上

#### 参考
1. [如何在windows上安装Openssl环境](https://blog.csdn.net/xjs38829890/article/details/131635153 '如何在windows上安装Openssl环境')
