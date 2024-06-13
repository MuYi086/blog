# gzip压缩脚本

# 进入dist目录
cd ./.vitepress/dist

# 压缩dist目录下的所有html文件
# for file in `ls *.html`
# do
#   gzip -k -f -9 $file
# done
gzip -9 ./*.html

# 进入dist/assets/chunks
cd assets/chunks
gzip -9 ./*.js
# 退出回到assets
cd ../
# 处理assets目录下所有js文件
gzip -9 ./*.js
# 退出回到dist
cd ../

# # 进入dist/Snippets/zsh目录
# cd Snippets/zsh
# gzip -9 ./*.html
# # 退出回到dist
# cd ../../

# # 进入dist/Docs
# cd Docs
# # 处理AI目录
# cd AI
# gzip -9 ./*.html
# cd ../
# # 处理Windows目录
# cd Windows
# gzip -9 ./*.html
# cd ../
# # 处理Git目录
# cd Git
# gzip -9 ./*.html
# cd ../
# # 处理Essay目录
# cd Essay
# gzip -9 ./*.html
# cd ../
# # 处理Back-End/Node目录
# cd Back-End/Node
# gzip -9 ./*.html
# # 处理Back-End/Python目录
# cd ../Python
# gzip -9 ./*.html
# cd ../../
# # 处理Front-End/CSS目录
# cd Front-End/CSS
# gzip -9 ./*.html
# # 处理Front-End/JS目录
# cd ../JS
# gzip -9 ./*.html
# # 处理Front-End/Standards目录
# cd ../Standards
# gzip -9 ./*.html
# cd ../../
# # 处理Linux/Deepin目录
# cd Linux/Deepin
# gzip -9 ./*.html
# # 处理Linux/Docker目录
# cd ../Docker
# gzip -9 ./*.html
# # 处理Linux/Shell目录
# cd ../Shell
# gzip -9 ./*.html
# # 处理Linux/Wall目录
# cd ../Wall
# gzip -9 ./*.html
# cd ../../



