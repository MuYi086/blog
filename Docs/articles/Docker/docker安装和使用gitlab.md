# docker安装和使用gitlab

## 安装gitlab镜像
如未安装 `docker` ,请先移步搭建环境: [deepin搭建docker环境](/Docker/deepin搭建docker环境)

```shell
# 安装gitlab社区版
docker pull gitlab/gitlab-ce
```

## 运行一个gitlab容器
```shell
# -m 最大占用内存 --memory-reservation 内存+swap
# --rm 停止后自动删除
# -d: 后台运行
# -p:将容器内部端口向外映射,这里建议使用80端口
# 上面建议80端口是因为在后续CI使用gitlab-runner时,其他自定义端口均报错(我尝试多种方法，均失败，目前未找到解决方案)
# --name:命名容器名称
# -v:将容器内数据文件夹,日志,配置等挂载到宿主机指定目录下
docker run -m 2048M -d -p 8443:443 -p 80:80 -p 8022:22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
```

## 配置gitlab.rb
```shell
sudo gedit /home/gitlab/config/gitlab.rb

# 配置http协议所用访问地址
# 由于ssh的原因,建议使用域名形式,然后在改host
external_url 'http://localhost'
# 配置ssh协议所访问地址和端口
gitlab_rails['gitlab_ssh_host'] = 'localhost'
# 222端口是run时22端口映射的
gitlab_rails['gitlab_shell_ssh_port'] = 2222
# 减少进程数:默认是2,设为1，服务器会卡死
unicorn['worker_processes'] = 2
# 减少数据库缓存:默认256
postgresql['shared_buffers'] = "128MB"
# 减少数据库并发数:默认8
postgresql['max_worker_processes'] = 4
# 减少sidekiq并发数:默认25
sidekiq['concurrency'] = 15
# 保存,进入容器
docker exec -it gitlab bash
# 重新配置
gitlab-ctl reconfigure
# 重启
gitlab-ctl restart
```

## gitlab邮件设置
```shell
# 进入容器
docker exec -it gitlab bash
# 重新配置
gitlab-ctl reconfigure
# 重启
gitlab-ctl restart
# 退出容器
exit
```

## 修改gitlab默认root密码
```shell
# 进入容器
docker exec -it gitlab bash
# 进入控制台
gitlab-rails console -e production
# 1. 通过id找到用户
user = User.where(id: 1).first
# 2. 通过邮件找到用户
user = User.find_by(email: '1258947325@qq.com')
# 更改密码: 至少8位
user.password = '12345678'
# 二次确认
user.password_confirmation = '12345678'
# 保存
user.save!
# 重启容器
docker restart gitlab
```

## gitlab切换为中文
```shell
# 头像 => setttings => 左侧边栏preferences => language
```

## 添加SSH keys
可参考[Git安装和配置](/Git/Git安装和配置)

## 从github导入项目
```shell
# 保存token
# github => settings => Developer settings
# Personal access tokens => Generate new token
# select repo => Generate token => 复制并保存token

# 导入项目
# gitlab => 创建项目 => import project => github => 填入token => 导入
```

## 自动同步到github
```shell
# 选择一个项目 => 左侧设置 => 仓库
# 填入对应的github项目地址,注意//后插入用户名,例如
https://MuYi086@github.com/MuYi086/blog.git
# 密码位置输入之前获得的token或者当前github用户的密码
```
![强制更新](/Images/Docker/Docker安装和使用gitlab/gitlab_01.png)

## 参考
1. [docker下gitlab安装配置使用(完整版)](https://www.jianshu.com/p/080a962c35b6')
1. [deepin搭建docker环境](/Docker/deepin搭建docker环境)
1. [Git安装和配置](/Git/Git安装和配置)
1. [gitlab代码自动同步到github](https://www.cnblogs.com/sxdcgaq8080/p/10530176.html)
1. [docker部署gitlab配置SMTP](https://blog.csdn.net/xiazichenxi/article/details/90233332)
1. [gitlab使用163邮箱向用户发送邮件](https://www.jianshu.com/p/3ff4c301a446)
1. [gitlab内存占用过大](https://blog.csdn.net/wanchaopeng/article/details/84771195)
1. [Docker(二十)-Docker容器CPU、memory资源限制](https://www.cnblogs.com/zhuochong/p/9728383.html)

