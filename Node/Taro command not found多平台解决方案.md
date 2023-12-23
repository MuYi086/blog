# Taro command not found 多平台解决方案

## 问题
在 `npmjs` 找到并全局安装 `@tarojs/cli` 后， 执行 `taro init` 命令，终端提示错误：`command not found`。

## 原因
`taro` 没有添加到系统的环境变量中。

## 解决方案

### 其他linux和macOS

#### 包管理器是npm

```SHELL
# 1. 找到安装目录
npm ls @tarojs/cli -g
# 我使用了nvm，地址格式如下，大家的地址可能不一样
# ~/.config/nvm/versions/node/v18.17.0/lib

# 2. 进入这个目录，找到真实taro的路径
cd ~/.config/nvm/versions/node/v18.17.0/lib
# 我们会发现下面还有一个node_modules目录,再然后子目录才全局安装包目录，其中就包括了@tarojs
# 在里面有cli目录，再进入才是bin目录，再下级才是最终的taro目录

# 3.综上，我们最终pwd打印的地址如下:
# ~/.config/nvm/versions/node/v18.17.0/lib/node_modules/@tarojs/cli/bin

# 4. 编辑/etc/profile文件, 将taro路径添加到环境变量中
sudo gedit /etc/profile
export TARO="~/.config/nvm/versions/node/v18.17.0/lib/node_modules/@tarojs/cli/bin"
export PATH=$TARO:$PATH

# 5. 执行source /etc/profile 使环境变量生效
source /etc/profile

# 6.关闭重新打开终端，执行taro -v 验证是否成功
taro -v
```

#### 包管理器是yarn（有问题）

```SHELL
# 1. 找到global目录
yarn global dir
# 比如我的地址是:
# ~/.local/share/yarn/global

# 2. 进入这个目录，找到真实taro的路径
cd ~/.local/share/yarn/global
# 我们发现还有一个node_modules目录,再然后子目录才全局安装包目录，其中就包括了@tarojs
# 在里面有cli目录，再进入才是bin目录，再下级才是最终的taro目录

# 3. 最终pwd打印的地址如下: 
# ~/.local/share/yarn/global/node_modules/@tarojs/cli/bin

# 4. 编辑/etc/profile文件, 将taro路径添加到环境变量中
sudo gedit /etc/profile
export TARO="~/.local/share/yarn/global/node_modules/@tarojs/cli/bin"
export PATH=$TARO:$PATH

# 5. 执行source /etc/profile 使环境变量生效
source /etc/profile

# 6.关闭重新打开终端，执行taro -v 验证是否成功
taro -v
```
### windows