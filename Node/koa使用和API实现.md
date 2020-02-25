## koa使用和API实现

#### 前言
记录一个小项目用 `koa` 实现前后端的过程

#### 工具
开发过程中用到的工具包括但不限于: `vscode, mysqlWorkbench, phpStudy, vue, koa, mysql `
#### 后端开发过程
1. 搭建 `koa` 项目

    ```SHELL
    # 全局安装koa
    npm i koa -g
    # 全局安装koa2项目生成器
    npm i koa-generator -g
    # 创建项目
    koa2 koaDemo
    # 安装依赖
    cd ./koaDemo && npm i
    ```

1. 丰富项目骨架
    ```SHELL
    # 安装sequelize, mysql, mysql2
    npm i sequelize mysql mysql2 --save
    # 解决跨域
    npm i koa-cors --save
    # app.js加入koa-cors的引用
    const cors = require('koa-cors')
    app.use(cors())
    ```
1. 根目录创建 `config` 目录, `config` 目录中创建 `db.js`
    ```JS
    const Sequelize = require('sequelize')
    const user = {dbName: 'koa', dbUserName: 'koa', password: 'koa'}
    const sequelize = new Sequelize(user.dbName, user.dbUserName, user.password, {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        dialectOptions: {
            // 字符集
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci',
            supportBigNumbers: true,
            bigNumberStrings: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        timezone: '+8:00' // 东八区
    });
    module.exports = {sequelize}
    ```

1. 创建 `schema` 目录，用于放置数据表模型实例,创建 `forward.js`
    ```JS
    const moment = require('moment')
    module.exports = function(sequelize, DataTypes) {
        return sequelize.define('forward', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field:'name'
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'id'
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'price'
            },
            deposit: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'deposit'
            },
            uuid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: true,
                autoIncrement: true
            }
        }, {
            freezeTableName: true
        })
    }
    ```

1. 创建 `modules` 目录, 用于放置实体模型, 创建 `forward.js`
    ```JS
    // 引入mysql配置文件
    const db = require('../config/db')
    const Sequelize = db.sequelize
    // 引入数据表模型
    const ForWard = Sequelize.import('../schema/forward')
    ForWard.sync({force: false}) // 自动创建表
    class ForWardModel {
        /**
        * 创建合约模型
        * @param data
        * @returns {Promise<*>}
        */
        static async createForWard(data) {
            return await ForWard.create({
                name: data.name,
                id: data.id,
                price: data.price,
                deposit: data.deposit
            })
        }

        /**
        * 查询合约列表
        * @param id 文章id
        * @returns {Promise<Model}
        */
        static async getForWardList(id) {
            return await ForWard.findOne({
                where: {
                    id
                }
            })
        }
    }

    module.exports = ForWardModel
    ```

1. 创建 `controller` 目录,用于放置控制器, 创建 `forward.js`
    ```JS
    const ForWardModel = require('../modules/forward')
    class forWardController {
        /**
        * 创建合约
        * @param ctx
        * @returns {Promise.<void>}
        */
        static async create(ctx) {
            // 接受客户端
            let req = ctx.request.body
            if(req.name && req.id && req.price && req.deposit) {
                try {
                    // 创建合约模型
                    const ret = await ForWardModel.createForWard(req)
                    // 使用刚刚创建的id查询合约列表,且返回合约信息
                    const data = await ForWardModel.getForWardList(ret.id)

                    ctx.response.status = 200
                    ctx.body = {
                        code: 200, 
                        msg: '创建合约成功',
                        data
                    }
                } catch(err) {
                    ctx.response.status = 412
                    ctx.body = {
                        code: 412,
                        msg: '创建合约失败',
                        data: err
                    }
                }
            } else {
                ctx.response.status = 416
                ctx.body = {
                    code: 200,
                    msg: '参数不全'
                }
            }
        }

        /**
        * 获取合约详情
        * @param ctx
        * @returns {Promise.<void>}
        */
        static async detail(ctx) {
            let id = ctx.params.id
            if (id) {
                try {
                    // 查询合约详情模型
                    let data = await ForWardModel.getForWardList(id)
                    ctx.response.status = 200
                    ctx.body = {
                        code: 200,
                        msg: '查询成功',
                        data
                    }
                } catch (err) {
                    ctx.response.status = 412
                    ctx.body = {
                        code: 412,
                        msg: '查询失败',
                        data: err
                    }
                }
            } else {
                ctx.response.status = 416
                ctx.body = {
                    code: 416,
                    msg: '合约id必须要传'
                }
            }
        }
    }

    module.exports = forWardController
    ```
1. `routes` 目录下 `index.js` 增加路由
    ```JS
    const ForWardController = require('../controllers/forward')

    // 创建合约
    router.post('/forward/create', ForWardController.create)
    // 获取合约详情
    router.get('/forward/:id', ForWardController.detail)
    ```

1. 启动服务
    ```SHELL
    npm start
    ```
1. [利用postman测试](https://blog.csdn.net/believe__dream/article/details/78723288 '利用postman测试')

#### 前端开发过程
1. 利用 `vue-cli` 新建一个项目,安装依赖
    ```SHELL
    vue init webpack koafront
    cd ./koafront && npm i
    ```
1. 利用 `proxyTable` 设置跨域
    ```JS
    proxyTable: {
        '/api': {
            target: "http://localhost:3000",
            changeOrigin: true,
            pathRewrite: {
            '^/api': ""
            }
        }
    },
    ```
1. 使用 `axios` 请求
    ```JS
    axios.get('api/forward/101').then(function (res) {
        console.log(res)
    }).catch(function (error) {
        console.log(error)
    })
    ```

#### 思考
1. 使用 `nginx` 代理实现跨域

#### 参考
1. [koa官方文档](https://koa.bootcss.com/ 'koa官方文档')
1. [koa2从搭建项目到实现API](https://www.jianshu.com/p/3e35db2c8d6c 'koa2从搭建项目到实现API')
1. [使用koa+mysql实现一个完整的项目](https://www.jianshu.com/p/98801a280b25 '使用koa+mysql实现一个完整的项目')
1. [前后端合一使用教程](https://molunerfinn.com/Vue+Koa/#%E9%A1%B9%E7%9B%AE%E7%94%A8%E5%88%B0%E7%9A%84%E4%B8%80%E4%BA%9B%E5%85%B3%E9%94%AE%E4%BE%9D%E8%B5%96)