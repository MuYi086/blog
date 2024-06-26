# SourceTree破解免登录(windows版)

## 方法一: 代理(推荐)
使用代理即可正常访问 `Atlassian` 的服务
## 方法二: 无代理

1. 初次运行安装 `SourceTree` 弹出如图,然后退出
  ![安装](/Images/Windows/SourceTree免登录,跳过初始设置/install.jpg '安装')
1. 在系统盘 `C:\Users\你的电脑名字\AppData\Local\Atlassian\SourceTree` ,新建一个 `accounts.json` 文件,粘贴入以下代码


      ```JSON
      [
        {
          "$id": "1",
          "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
          "Authenticate": true,
          "HostInstance": {
            "$id": "2",
            "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
            "Host": {
              "$id": "3",
              "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
              "Id": "atlassian account"
            },
            "BaseUrl": "https://id.atlassian.com/"
          },
          "Credentials": {
            "$id": "4",
            "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
            "Username": "",
            "Email": null
          },
          "IsDefault": false
        }
      ]
      ```
1. `3.3.8` 以后版本需要进一步修改 `user.config`
    ```HTML
    <!-- 进入上一步SourceTree目录,选择第二项进入,修改uers.config文件 -->
    <setting name="AgreedToEULA" serializeAs="String">
     <value>True</value>
    </setting>
    <setting name="AgreedToEULAVersion" serializeAs="String">
      <value>20160201</value>
    </setting>
    ```

1. 重新执行安装步骤,然后选择 `我不想使用Mercurial`

    ![不使用Mercurial](/Images/Windows/SourceTree免登录,跳过初始设置/choose.jpg '不使用Mercurial')

1. 也可以在进入软件主界面中的设置配置 `ssh` 客户端

    ![配置ssh客户端](/Images/Windows/SourceTree免登录,跳过初始设置/ssh_config.png '配置ssh客户端')
