# Taro command not found 多平台解决方案

## 问题
在 `npmjs` 找到并全局安装 `@tarojs/cli` 后， 执行 `taro init` 命令，终端提示错误：`command not found`。

## 原因
`taro` 没有添加到系统的环境变量中。

## 解决方案

### 一: 安装@tarojs/cli@3.6.12

### 二： 修复@tarojs/cli@1.3.36环境变量配置


## 其他linux和macOS

## 包管理器是npm
1. 找到安装目录
    ```shell
    npm ls @tarojs/cli -g
    # 我使用了nvm，地址格式如下，大家的地址可能不一样
    # ~/.config/nvm/versions/node/v18.17.0/lib
    ```
1. 进入这个目录，找到真实 `taro` 的路径
    ```shell
    cd ~/.config/nvm/versions/node/v18.17.0/lib
    # 我们会发现下面还有一个node_modules目录,再然后子目录才全局安装包目录，其中就包括了@tarojs
    # 在里面有cli目录，再进入才是bin目录，再下级才是最终的taro目录
    ```

1. 综上，我们最终 `pwd` 打印的地址如下:
    ```shell
    # ~/.config/nvm/versions/node/v18.17.0/lib/node_modules/@tarojs/cli/bin
    ```

1. 编辑 `/etc/profile` 文件, 将 `taro` 路径添加到环境变量中
    ```shell
    sudo gedit /etc/profile
    export TARO="~/.config/nvm/versions/node/v18.17.0/lib/node_modules/@tarojs/cli/bin"
    export PATH=$TARO:$PATH
    ```

1. 执行 `source /etc/profile` 使环境变量生效
    ```shell
    source /etc/profile
    ```

1. 关闭重新打开终端，执行 `taro -v` 验证是否成功
    ```shell
    taro -v
    ```

## 包管理器是yarn（有问题）

1. 找到 `global` 目录
    ```shell
    yarn global dir
    # 比如我的地址是:
    # ~/.local/share/yarn/global
    ```

1. 进入这个目录，找到真实 `taro` 的路径
    ```shell
    cd ~/.local/share/yarn/global
    # 我们发现还有一个node_modules目录,再然后子目录才全局安装包目录，其中就包括了@tarojs
    # 在里面有cli目录，再进入才是bin目录，再下级才是最终的taro目录
    ```

1. 最终 `pwd `打印的地址如下: 
    ```shell
    # ~/.local/share/yarn/global/node_modules/@tarojs/cli/bin
    ```

1. 编辑 `/etc/profile`文件, 将 `taro` 路径添加到环境变量中
    ```shell
    sudo gedit /etc/profile
    export TARO="~/.local/share/yarn/global/node_modules/@tarojs/cli/bin"
    export PATH=$TARO:$PATH
    ```

1. 执行 `source /etc/profile` 使环境变量生效
    ```shell
    source /etc/profile
    ```

1. 关闭重新打开终端，执行 `taro -v` 验证是否成功
    ```shell
    taro -v
    ```