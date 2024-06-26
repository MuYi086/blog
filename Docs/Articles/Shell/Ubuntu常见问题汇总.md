---
tags:
  - Shell
---
# Ubuntu常见问题汇总

## 问题
1. 挂载移动硬盘时出现 `unknown error when mounting/dev/sdb1`

    ```shell
    # 查看分区挂载情况
    sudo fdisk -l

    # 最末尾 /dev/sdb1 就是出问题的硬盘
    # 修复挂载错误的相应的分区
    sudo ntfsfix /dev/sdb1
    ```