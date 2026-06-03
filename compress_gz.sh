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

# 进入Articles目录
cd Articles
# 处理后端目录
cd 后端
gzip -k -f -9 ./*.html
cd ../
# 处理前端目录
cd 前端
gzip -k -f -9 ./*.html
cd ../
# 处理人工智能目录
cd 人工智能
gzip -k -f -9 ./*.html
cd ../
# 处理随笔目录
cd 随笔
gzip -k -f -9 ./*.html
cd ../
# 处理运维目录
cd 运维
gzip -k -f -9 ./*.html
cd ../
# 处理Git目录
cd Git
gzip -k -f -9 ./*.html
cd ../
# 处理Linux目录
cd Linux
gzip -k -f -9 ./*.html
cd ../
# 处理Wall目录
cd Wall
gzip -k -f -9 ./*.html
cd ../



