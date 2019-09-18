## GIt安装和配置

#### Git配置用户名和邮箱
```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

#### 创建SSH Key
`ssh-keygen -t rsa -C "youremail@example.com"`
id_rsa和id_rsa.pub 分别是私钥和公钥

#### 添加github的host
```
#github
192.30.253.112 github.com
192.30.253.113 github.com
192.30.253.118 gist.github.com
192.30.253.119 gist.github.com
```

#### github添加SSH Key
`Account settings 选择SSH and GPG keys填入你的公钥id_rsa.pub`

验证是否成功，在git bash里面输入下面的命令

`ssh -T git@github.com`
