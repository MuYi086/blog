#### 利用zx + SSHKey发布代码到服务器

#### 起因
原先我们团队的代码发布是通过脚本 `build` 后打包成 `zip` 调用 `ssh` (使用账号密码)发布到服务器。运维觉得这样不安全，于是我们想到了 `SSHKey`

#### 思路
将客户端的公钥保存到服务器,通过 `SSHKey` 登录,并 `putFile`

#### 实现
1. 将公钥保存到服务器

    ```SHELL
    # 从目录/etc 或 /etc/ssh 或 /etc/conf.d 中找到sshd_config 文件,并用vi编辑器打开
    # 启用RSAAuthentication和PubkeyAuthentication
    RSAAuthentication yes
    PubkeyAuthentication yes
    # 指定AuthorizedKeysFile文件位置
    # 我的系统是deepin20.3 ubuntu及其衍生应该也是这个目录
    AuthorizedKeysFile	~/.ssh/authorized_keys
    # 重新启动服务
    service sshd restart
    ```

1. 测试

    ```SHELL
    # 将客户端公钥复制粘贴到服务端
    # 客户端: ubuntu系一般是再 ~/.ssh目录下
    # 服务端: ~/.ssh/authorized_keys
    # 这是我的主机，你们自行替换成自己的
    ssh root@207.148.21.221
    # 如果登录成功，说明已经配置好了
    ```

1. 发布脚本

    ```JS
    // deploy.config.js
    module.exports = {
      projectName: 'test', // 项目名称
      test: {
        host: '207.148.21.221', // 主机
        username: 'ougege', // 账号
        distPath: 'dist', // 本地打包目录
        webDir: '/www/wwwroot/test/dist', // 服务器部署路径（不可为空或'/'）
        privateKeyPath: '/home/ougege/.ssh/id_ed25519' // sshKey路径
      },
      prod: {
        host: '207.148.21.221', // 主机
        username: 'root', // 账号
        distPath: 'dist', // 本地打包目录
        webDir: '/www/wwwroot/test/dist', // 服务器部署路径（不可为空或'/'）
        privateKeyPath: '/home/ougege/.ssh/id_ed25519' // sshKey路径
      }
    }
    ```

    ```JS
    // package.json
    "scripts": {
      "deployTest": "zx ./start.mjs test",
      "deploy": "zx ./start.mjs prod"
    }
    ```

    ```shell
    #!/usr/bin/env zx
    # start.mjs
    /**
    * @Author: yanglu
    * @Email: 1258947325@qq.com
    * @Blog: https://github.com/ougege/blog
    * @Theme: zx+ssh上传文件
    * @Date: 2022/09/13 14:28
    */
    const deployConfig = require('./deploy.config')
    const { NodeSSH } = require('node-ssh')
    const ssh = new NodeSSH()
    const config = deployConfig[process.argv[3]]
    // 连接ssh
    const connectSSH = async (config) => {
      try {
        console.log('开始连接ssh')
        await ssh.connect(config)
      } catch (e) {
        console.log('error', e)
      }
    }
    // 上传本地文件
    const uploadLocalFile = async (config) => {
      try {
        const localFileName = `${config.distPath}.zip`
        const remoteFileName = `${config.webDir}.zip`
        const localPath = `./${localFileName}`
        console.log(`上传打包${localPath}至目录 ${remoteFileName}`)
        await ssh.putFile(localPath, remoteFileName).then(() => {
          console.log('上传成功')
        }, err => {
          throw new Error('出错了', err)
        })
      } catch (e) {
        console.log(`error:上传失败: ${e}`)
      }
    }

    // 解压远程文件
    const unzipRemoteFile = async (config) => {
      try {
        const { webDir } = config
        const remoteFileName = `${webDir}.zip`
        console.log(`解压远程文件 ${remoteFileName}`)
        await ssh.execCommand(
          `unzip -o ${remoteFileName} -d ${webDir} && rm -rf ${remoteFileName}`
        )
        console.log('解压成功')
      } catch (e) {
        console.log(`error:解压失败: ${e}`)
      }
    }

    // 删除远程文件
    const removeRemoteFile = async (config) => {
      try {
        const { webDir } = config
        console.log(`删除远程文件 ${webDir}`)
        await ssh.execCommand(`rm -rf ${webDir}`)
        console.log('删除成功')
      } catch (e) {
        console.log(`error:删除远程文件失败: ${e}`)
      }
    }

    // 断开ssh
    const disconnectSSH = () => {
      ssh.dispose()
    }

    // 主函数
    const main = async () => {
      await connectSSH(config)
      await uploadLocalFile(config)
      await unzipRemoteFile(config)
      // await removeRemoteFile(config)
      await disconnectSSH()
    }

    main()
    ```

#### 参考
1. [zx](https://github.com/google/zx 'zx')
1. [SFTP/SSH/SCP访问设置Public Key认证](https://www.cnblogs.com/leadership/p/11820014.html 'SFTP/SSH/SCP访问设置Public Key认证')
1. [unzip命令](https://blog.csdn.net/chekongfu/article/details/121147010 'unzip命令')
1. [node-ssh](https://github.com/steelbrain/node-ssh 'node-ssh')
1. [ssh实现免密码登录和文件传输](https://www.cnblogs.com/igoodful/p/11583751.html 'ssh实现免密码登录和文件传输')
1. [linux免秘钥登录和scp传输文件](https://blog.csdn.net/lsr40/article/details/89923703 'linux免秘钥登录和scp传输文件')