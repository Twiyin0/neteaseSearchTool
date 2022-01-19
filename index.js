/*---------------------------------------------------------------
项目名称：基于网易云API(与metingAPI)的网易云音乐自助单曲搜索及下载工具
作者: 暮色音铃Twiyin0
时间: 2022/01/19
-----------------------------------------------------------------*/

// request模块，用于curl  #npm i request
const request = require('request');
// 文件处理模块
const fs = require("fs");
// 输入模块
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let urlRoot = 'http://bt.yin0mc.ltd:3001/search?keywords=';

// 主功能区
readline.question(`输入关键词:\n`, keyWord => {
    console.log(`搜索关键词 ${keyWord} 中.....`)
    keyWord = encodeURIComponent(keyWord);      // 中文转Url能识别的编码
    var rUrl = urlRoot+keyWord;
    searchResult(rUrl);
})

// 获取搜索结果的Json ## 存为Json文件
function searchResult(url) {
    request(url,function (error, response, data) {
        if (!error && response.statusCode == 200) {
            // console.log(data);
            var getJson = eval("(" + data + ")");
            consoleOutput(getJson);      // 终端输出前20首
            readline.question(`请选择下载的序号:\n`, keyWord1 => {
                readline.close()
                if(keyWord1 > 0 && keyWord1 <= 20) {
                    console.log(`选择了序号${keyWord1}\n`);
                    var songUrl = 'https://api.injahow.cn/meting/?type=url&id=' + getJson.result.songs[keyWord1-1].id;
                    // 为什么不用同一个API？因为我没有网易云黑胶，某些下载过来的音频就只有试听的一分钟
                    var songFile = getJson.result.songs[keyWord1-1].name+'-- '+getJson.result.songs[keyWord1-1].artists[0].name+'.mp3';
                    downloeadFile(songUrl,songFile);
                }
                else {
                    console.log('输入的序号有误，退出程序！\n');
                }
            })
        }
        else {
            console.log('未知错误,请检查:');
            console.error(error);
        }
        
    });
}

function downloeadFile(url, fileName) {
    request(url).pipe(fs.createWriteStream(`./mp3/${fileName}.mp3`));
    console.log(`下载./img/${fileName}.mp3完成！`);
}

function consoleOutput(getJson) {
    // 为什么不用循环？循环太快会把前一个log覆盖掉，导致终端卡顿，影响输出
    // 为什么不用延时？因为我又懒又菜！！嗯！！！！
    console.log('1-> '+getJson.result.songs[0].name+'-- '+getJson.result.songs[0].artists[0].name+'  歌曲ID: '+getJson.result.songs[0].id)
    console.log('2-> '+getJson.result.songs[1].name+'-- '+getJson.result.songs[1].artists[0].name+'  歌曲ID: '+getJson.result.songs[1].id)
    console.log('3-> '+getJson.result.songs[2].name+'-- '+getJson.result.songs[2].artists[0].name+'  歌曲ID: '+getJson.result.songs[2].id)
    console.log('4-> '+getJson.result.songs[3].name+'-- '+getJson.result.songs[3].artists[0].name+'  歌曲ID: '+getJson.result.songs[3].id)
    console.log('5-> '+getJson.result.songs[4].name+'-- '+getJson.result.songs[4].artists[0].name+'  歌曲ID: '+getJson.result.songs[4].id)
    console.log('6-> '+getJson.result.songs[5].name+'-- '+getJson.result.songs[5].artists[0].name+'  歌曲ID: '+getJson.result.songs[5].id)
    console.log('7-> '+getJson.result.songs[6].name+'-- '+getJson.result.songs[6].artists[0].name+'  歌曲ID: '+getJson.result.songs[6].id)        
    console.log('8-> '+getJson.result.songs[7].name+'-- '+getJson.result.songs[7].artists[0].name+'  歌曲ID: '+getJson.result.songs[7].id)        
    console.log('9-> '+getJson.result.songs[8].name+'-- '+getJson.result.songs[8].artists[0].name+'  歌曲ID: '+getJson.result.songs[8].id)        
    console.log('10-> '+getJson.result.songs[9].name+'-- '+getJson.result.songs[9].artists[0].name+'  歌曲ID: '+getJson.result.songs[9].id)        
    console.log('11-> '+getJson.result.songs[10].name+'-- '+getJson.result.songs[10].artists[0].name+'  歌曲ID: '+getJson.result.songs[10].id)        
    console.log('12-> '+getJson.result.songs[11].name+'-- '+getJson.result.songs[11].artists[0].name+'  歌曲ID: '+getJson.result.songs[11].id)
    console.log('13-> '+getJson.result.songs[12].name+'-- '+getJson.result.songs[12].artists[0].name+'  歌曲ID: '+getJson.result.songs[12].id)
    console.log('14-> '+getJson.result.songs[13].name+'-- '+getJson.result.songs[13].artists[0].name+'  歌曲ID: '+getJson.result.songs[13].id)
    console.log('15-> '+getJson.result.songs[14].name+'-- '+getJson.result.songs[14].artists[0].name+'  歌曲ID: '+getJson.result.songs[14].id)
    console.log('16-> '+getJson.result.songs[15].name+'-- '+getJson.result.songs[15].artists[0].name+'  歌曲ID: '+getJson.result.songs[15].id)
    console.log('17-> '+getJson.result.songs[16].name+'-- '+getJson.result.songs[16].artists[0].name+'  歌曲ID: '+getJson.result.songs[16].id)
    console.log('18-> '+getJson.result.songs[17].name+'-- '+getJson.result.songs[17].artists[0].name+'  歌曲ID: '+getJson.result.songs[17].id)
    console.log('19-> '+getJson.result.songs[18].name+'-- '+getJson.result.songs[18].artists[0].name+'  歌曲ID: '+getJson.result.songs[18].id)
    console.log('20-> '+getJson.result.songs[19].name+'-- '+getJson.result.songs[19].artists[0].name+'  歌曲ID: '+getJson.result.songs[19].id)
}
