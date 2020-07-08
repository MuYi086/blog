## 神器vimium使用说明

#### 设置搜索引擎
1. 打开 `vimium` 设置界面
1. 修改  `Custom search
engines`配置

```SHELL
w: https://www.wikipedia.org/w/index.php?title=Special:Search&search=%s Wikipedia

# More examples.
#
# (Vimium supports search completion Wikipedia, as
# above, and for these.)
#
g: https://www.google.com/search?q=%s Google
l: https://www.google.com/search?q=%s&btnI I'm feeling lucky...
y: https://www.youtube.com/results?search_query=%s Youtube
gm: https://www.google.com/maps?q=%s Google maps
b: https://www.bing.com/search?q=%s Bing
d: https://duckduckgo.com/?q=%s DuckDuckGo
az: https://www.amazon.com/s/?field-keywords=%s Amazon
qw: https://www.qwant.com/?q=%s Qwant
```
1. 点击底部保存

#### 操作网页
```SHELL
j # 向下滚动一点
k # 向上滚动一点
d # 向下滚动半页
u # 向上滚动半页
gg # 滚动到页面顶部
G # 滚动到页面底部
h # 向左滚动
l # 向右滚动
r # 刷新页面
yy # 复制当前页的url到剪贴板
p # 在当前标签页打开剪贴板中的url，如果不是url则默认搜索引擎搜索
P # 在新标签页打开剪贴板中的url，如果不是url则默认搜索引起搜索
i # 输入模式，有些网页有内置的快捷键,进入该模式即可使用网页内置的快捷键
v # 可视化模式
gi # 定焦在页面第一个文本可输入的位置
f # 打开元素定位器,是在当前标签页打开
F # 打开元素定位器,是在新标签页打开
gF # 选择下一个frame(尤其在选择网页内置视频的时候很管用)
? # 显示命令的帮助菜单(再按一次关闭)
```

#### 操作标签
```SHELL
t # 新建标签页
J, gT # 切换到左标签页
K, gt # 切换到右标签页
^ # 切换到上一个历史标签页(可用于俩个标签页之间的切换)
g0 # 切换到第一个标签
g$ # 切换到最后一个标签
yt # 复制当前标签页并打开
x # 关闭当前标签页
X # 恢复关闭的标签页
# << 将当前标签页向左移动
# >> 将当前标签页向右移动
```

#### 浏览历史
```SHELL
L # 前进
H # 后退
```

#### 查找功能
```SHELL
/ # 开启查找功能(右下角输入enter结束)
n # 查找下一个
N # 查找上一个
```

#### 使用搜索框
```SHELL
o # 从url，书签，历史记录中搜索地址,回车打开
O # 从url，书签，历史记录中搜索地址,回车在新标签页打开
b # 仅从书签搜索地址，回车打开
B # 仅从书签搜索地址，回车新标签页中打开
T # 搜索当前浏览器的所有标签
```


#### 参考
1. [vimium README](https://github.com/philc/vimium#keyboard-bindings 'vimium README')
1. [神器vimium：比同级程序员成长更快，我主要靠它](https://zhuanlan.zhihu.com/p/38179086 '神器vimium：比同级程序员成长更快，我主要靠它
张小鸡')
1. [Chrome神器Vimium使用方法](https://www.jianshu.com/p/2af687487d2c 'Chrome神器Vimium使用方法')