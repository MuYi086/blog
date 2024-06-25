# gzip压缩脚本

# 进入dist目录
cd Docs/.vitepress/dist

# 压缩dist目录下的所有html文件
# for file in `ls *.html`
# do
#   gzip -k -f -9 $file
# done
gzip -k -f -9 ./*.html

# 进入dist/assets/chunks
cd assets/chunks
gzip -k -f -9 ./*.js
# 退出回到assets
cd ../
# 处理assets目录下所有js文件
gzip -k -f -9 ./*.js
# 退出回到dist
cd ../

# 进入dist/Snippets/zsh目录
cd Snippets/zsh
gzip -k -f -9 ./*.html
# 退出回到dist
cd ../../

# 处理AI目录
cd AI
gzip -k -f -9 ./*.html
cd ../
# 处理Windows目录
cd Windows
gzip -k -f -9 ./*.html
cd ../
# 处理Git目录
cd Git
gzip -k -f -9 ./*.html
cd ../
# 处理Essay目录
cd Essay
gzip -k -f -9 ./*.html
cd ../
# 处理Node目录
cd Node
gzip -k -f -9 ./*.html
cd ../
# 处理Python目录
cd Python
gzip -k -f -9 ./*.html
cd ../
# 处理CSS目录
cd CSS
gzip -k -f -9 ./*.html
cd ../
# 处理JS目录
cd JS
gzip -k -f -9 ./*.html
cd ../
# 处理Standards目录
cd Standards
gzip -k -f -9 ./*.html
cd ../
# 处理Deepin目录
cd Deepin
gzip -k -f -9 ./*.html
cd ../
# 处理Docker目录
cd Docker
gzip -k -f -9 ./*.html
cd ../
# 处理Shell目录
cd Shell
gzip -k -f -9 ./*.html
cd ../
# 处理Wall目录
cd Wall
gzip -k -f -9 ./*.html
cd ../
# 处理Network目录
cd Network
gzip -k -f -9 ./*.html
cd ../



