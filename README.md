# 工程基本信息
项目名称：基于nodejs版网易云API(与metingAPI)的网易云音乐自助单曲搜索及下载工具<br>
作者: 暮色音铃Twiyin0<br>
时间: 2022/01/19<br>

# 声明
**请尊重歌曲版权，未经歌曲所有者同意不得传播**<br>
网易云API<br>
[网易云音乐 NodeJS 版 API](https://neteasecloudmusicapi.vercel.app/)<br>
meting-api<br>
[MetingAPI](https://github.com/injahow/meting-api)<br>
尊重原作者，不得滥用API<br>
API及此项目仅供学习，不得用于任何商业用途<br>

# 用法
## 前置&依赖
* nodejs(v14+)[nodejs](http://nodejs.cn/)<br>
* 网易云API [网易云音乐 NodeJS 版 API](https://neteasecloudmusicapi.vercel.app/)<br>
* (可选)meting-api [MetingAPI](https://github.com/injahow/meting-api)<br>
依赖安装
```npm
npm i request
```
在index.js同目录下新建名为mp3的文件夹<br>
(或者修改文件储存位置,在downloeadFile函数内./mp3/${fileName}.mp3的./mp3是存储路径)<br>

## 运行
使用node运行项目<br>
```node
node index.js
```
输入的关键词就是要搜索的内容<br>
再选择下载的歌曲的序号'1->'就是1<br>

## 注意
请确保存储的文件夹存在，否则会报错<br>
如果不小心输错了序号，可以使用`ctrl-c`退出程序
