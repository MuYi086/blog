## Git安装和配置

#### Git配置用户名和邮箱
```SHELL
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

#### 创建SSH Key

旧命令生成的 `rsa`， `github` 不认
~~ssh-keygen -t rsa -C "youremail@example.com"~~
```SHELL

# 使用新命令生成rsa
ssh-keygen -t ed25519 -C "yourEmail@example.com"
```
 `id_rsa` 和 `id_rsa.pub` 分别是私钥和公钥

#### 添加github的host
```JS
# github
192.30.253.112 github.com
192.30.253.113 github.com
192.30.253.118 gist.github.com
192.30.253.119 gist.github.com
```

#### github添加SSH Key
 `Account settings` 选择 `SSH and GPG keys` 填入你的公钥 `id_rsa.pub`

验证是否成功，在 `git bash` 里面输入下面的命令

```SHELL
ssh -T git@github.com
```
