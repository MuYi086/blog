---
tags:
  - Deepin
---
# deepin安装lamp

## 安装mysql
```shell
sudo apt-get install mysql-server mysql-client
```

## 进入mysql
```shell
mysql -u root -p
# 因为root的密码应该是空;在Enter password时回车会报错
```

## 修改mysql密码
我们使用 `mysql_secure_installation` 来修改数据库 `Root` 用户的密码
```shell
MuYi086@MuYi086-PC:~$sudo mysql_secure_installation
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user.  If you've just installed MariaDB, and
you haven't set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

You already have a root password set, so you can safely answer 'n'.

Change the root password? [Y/n] Y
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] Y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] n
 ... skipping.

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] Y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] Y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

## 安装phpmyadmin
```shell
# 安装phpmyadmin会默认安装他的依赖包括php,apache
sudo apt-get install phpmyadmin
# 浏览器打开localhost/phpmyadmin  发现打不开
# 对了,我们将phpmyadmin建立到根的软链接
sudo ln -s /usr/share/phpmyadmin/ /var/www/html/phpmyadmin
# 再次打开localhost/phpmyadmin
```

## 登录mysql
此时在 `phpmyadmin` 用 `root` 身份登录还是报错
原因是普通用户无法使用 `Mariadb` 的 `root` 用户连接数据库
```shell
sudo mysql -u root -p
# 输入密码登录
# 以下MuYi086是要填入创建的用户名,password是要填入的密码
MariaDB [(none)]>CREATE USER MuYi086@localhost IDENTIFIED BY 'password';
# 回车创建
```
再次在`localhost/phpmyadmin`登录

## 为新用户授权
注意:以上操作的用户在登录后仍然没有权限新建数据库
```shell
sudo mysql -u root -p
# 输入密码登录
# 给用户授权
grant all on *.* to MuYi086@localhost;
# 重新加载权限
flush privileges;

# 删除用户
drop user name@host;
# 查询用户
select User,Host,Password from mysql.user;
# 创建一个数据库test
create database test;
```

## 常用MariaDB命令
```shell
# 查看当前用户：方法一
select user();
# 方法二
select current_user;
# 方法三
select current_user();
# 显示所有用户
select user from mysql.user;
# 删除用户
delete from user where user='MuYi086';
```


## 参考
1. [使用deepin(linux)系统安装mysql教程](https://blog.csdn.net/weixin_42747717/article/details/83788580)
1. [DeepIn15.11新安装MYSQL改root密码的问题](https://zhuanlan.zhihu.com/p/76483155)
1. [安装Apache, PHP, MySQL and phpMyAdmin on deepin](https://bbs.deepin.org/forum.php?mod=viewthread&tid=42668)
1. [MariaDB数据库用户创建/删除及权限授权/撤回](https://www.cnblogs.com/apollo1616/articles/10294490.html)