### SourceTree免登录,跳过初始设置(windows版)
1. 初次运行安装`SourceTree`弹出如图,然后退出

 ![安装](/images/windows/chapter_02/install.jpg)

1. 在系统盘`C:\Users\你的电脑名字\AppData\Local\Atlassian\SourceTree`,新建一个`accounts.json`文件,粘贴入以下代码

  ```
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

1. 重新执行安装步骤,然后选择`我不想使用Mercurial`

![不使用Mercurial](/images/windows/chapter_02/choose.jpg)

