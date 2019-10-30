#### 背景
在进入deepin安装时,发现找不到ssd所在的第二块硬盘

#### 过程
百度搜索的大部分解决方案都不理想,没有解决问题.

#### 结果
最终用google搜索关键词,在dell社区中找到了解决方案

#### 本机操作步骤
1. 进入BIOS,将SATA Operation改为AHCI
1. 将Drivers中SATA-0和SATA-1关闭,仅留下SSD-0
1. 在BootSequence中将启动盘设为第一启动项

#### 参考来源
1. [戴尔社区](https://www.dell.com/community/%E7%81%B5%E8%B6%8A%E7%AC%94%E8%AE%B0%E6%9C%AC/%E6%B8%B8%E5%8C%A3-7567-%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98%E4%B8%8D%E8%AF%86%E5%88%AB/td-p/6095627)