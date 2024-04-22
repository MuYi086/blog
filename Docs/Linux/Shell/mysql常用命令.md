# mysql常用命令

## 介绍
总结些工作中常用的命令，毕竟，好记性不如烂笔头嘛。

## 命令
```mysql

# 选择数据库
use database;

# 创建表
create table student (
    number int primary key,
    name varchar(5),
    sex enum('男', '女'),
    id_number char(18),
    birth date,
    unique key (id_number)
);

# 插入数据
insert into student (number, name, sex, id_number, birth) values
(20200202, '张三', '男', '001', '2000-01-01'),
(20200203, '李雪', '女', '002', '2000-01-02');

# 删除某行
delete from student where name='张三' and id=1;
```