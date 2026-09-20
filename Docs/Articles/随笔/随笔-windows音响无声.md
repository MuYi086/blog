---
tags:
  - 随笔
---
# 随笔-windows音响无声

## 情况
主板是 `ASUS B760M-AYW WIFI`；当前 `Realtek` 主驱动为 `6.0.9670.1`
系统刚启动时，外接的音响有声音，我=调整右下角系统音量还是有声音的，但是过了一会，再调试音量就没有声音了

## 分析
`Windows` 音频服务仍在运行，`Realtek` 音频驱动与“扬声器 (`Realtek`)”端点都被系统识别为正常；日志里唯一的警告是显示设备驱动加载失败

## 定位
大概率是 `Realtek` 音频在待机/锁屏后的恢复异常，而不是系统音量被静音

## 处理
```shell
# 1. 现在失声时，以管理员打开 PowerShell，执行：

Restart-Service Audiosrv -Force

# 若立即恢复，基本确认是音频栈待机恢复问题。我的直接重启尝试被系统拒绝，因为当前终端没有管理员权限，未修改任何设置

# 2. 按 Win + R
mmsys.cpl
# - “播放”中将 扬声器 (Realtek(R) Audio) 设为默认设备
# - 选中它 →“属性”→“高级”：取消勾选两项“独占模式”
# - “增强功能”：勾选“禁用所有增强功能”（若有）
# - 点“测试”

# 3. 若测试时音量条会动、仍没有实体声音：Windows 已把音频送到 Realtek，重点检查音响供电、3.5mm 音频线、前/后置接口；用一副耳机插同一接口可快速区分是音响/线材还是主板输出问题

# 4. 若重启音频服务能恢复、过一会又复发：重装主板官方 Realtek 驱动

#  ASUS 官方驱动页 https://www.asus.com/motherboards-components/motherboards/others/b760m-ayw-wifi/helpdesk_download?model2Name=B760M-AYW-WIFI
```