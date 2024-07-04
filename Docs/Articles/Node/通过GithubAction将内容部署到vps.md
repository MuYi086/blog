---
tags:
  - Node
---
# 通过GithubAction将内容部署到vps

## 创建Action文件
在项目根目录创建 `.github/workflows/ci.yml`

[参考文档](https://github.com/ATQQ/sugar-blog/blob/047a49ff164676502e97ce70247946ba7a5b15c8/packages/create-theme/public/template/.github/workflows/deploy.yml)

```yml
# 标题
name: GitHub Actions 部署 vitepress 博客
# 触发时机:表示推送master分支时触发
on:
  push:
    branches:
      - master
# 任务列表
jobs:
  build-and-deploy:
    # 运行环境
    runs-on: ubuntu-latest
    # 步骤
    steps:
    # 步骤1:安装Node.js
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20
    # 步骤2:检出代码
    - name: Checkout
      uses: actions/checkout@v4
    # 步骤3:安装yarn
    - name: Install yarn
      run: npm install -g yarn
    # 步骤4:安装依赖
    - name: Install dependencies
      run: yarn install
    # 步骤5:构建VitePress
    - name: Build VitePress
      run: yarn run docs:build
    # 步骤6:部署到Github Pages
    # - name: Deploy to Github Pages
    #   uses: peaceiris/actions-gh-pages@v3
    #   with:
    #     github_token: ${{ secrets.VITEPRESS_BLOG_TOKEN }} # 自定义的action环境变量
    #     publish_dir: .vitepress/dist # 指定部署目录
    #     publish_branch: gh-pages # 指定部署分支
    #     dotfiles: true # 允许使用.gitignore文件
    # 步骤7: scp部署到 vps
    - name: Deploy to VPS
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.SERVER_HOST }} # 服务器地址
        username: ${{ secrets.SERVER_USER }} # 服务器用户名
        port: ${{ secrets.SERVER_PORT }} # 服务器端口
        key: ${{ secrets.SERVER_SSH_KEY }} # 服务器SSH 密钥
        # password: ${{ secrets.SERVER_USER_PASSWORD }} # 服务器用户密码
        strip_components: 2 # 跳过指定目录
        source: '.vitepress/dist' # 源目录
        target: ${{ secrets.SERVER_TARGET }} # 目标目录
```

## 配置 Action 环境变量

1. 右上角头像 => `Settings` => `Developer Settings` => `Personal access tokens` => `Tokens(classic)` => `Generate new token`

![vitepress_blog_token](/Images/Node/通过GithubAction将内容部署到vps/vitepress_blog_token.png "vitepress_blog_token")

::: warning 注意
存储生成的 `token` ，请妥善保管，永远只出现一次。
:::

## 仓库添加环境变量
1. 打开仓库主页 => `Settings` => `Secrets and variables` => `Actions` => `New repository secret` => 填入变量名和 `token`

1. 推送本地代码，`github action` 检测到 `ci.yml` 文件，自动触发部署，将编译后的 `dist` 部署到 `gh-pages` 分支

## 配置github pages

1. 打开仓库主页 => `Settings` => `Pages` => `Source` => 选择 `gh-pages` 分支 => `Save`

![github_pages](/Images/Node/通过GithubAction将内容部署到vps/github_pages.png "github_pages")

## 配置action scp 部署到vps

1. 登录 `vps` ，生成 `SSH` 秘钥

    ```shell
    # 生成ssh秘钥
    ssh-keygen -t rsa -b 4096 -C "github-actions-node"
    # 将公钥复制到服务器的authorized_keys文件中
    cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys
    ```
1. 配置 `Actions Secrets`

    ```shell
    # 打印私钥，复制粘贴到github action环境变量中，命名为SSH_KEY
    cat /root/.ssh/id_rsa
    ```


## 参考
1. [GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
1. [Github 管理个人访问令牌](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
1. [通过 Github Action 将 GitHub 上的内容部署到 VPS](https://tourcoder.com/deploy-from-github-to-vps-via-github-action/)
1. [使用 GitHub Actions 在代码更新时自动部署代码到 VPS](https://blog.csdn.net/m0_57236802/article/details/134216395)
1. [vitepress项目使用github的action自动部署到github-pages中](https://blog.csdn.net/weixin_43972992/article/details/135123018)
1. [使用Github Actions自动部署Golang应用到VPS服务器](https://github.com/axiaoxin/axiaoxin/issues/27)
1. [使用 GitHub Actions 部署 Next.js 项目到 VPS](https://riddma.com/post/deploy-next-js-to-vps-using-github-actions)