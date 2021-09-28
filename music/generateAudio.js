var glob = require("glob")
var fs = require("fs")
 
glob("./audio/**/*.{mp3,wav,flac}", {}, function (er, files) {
  let result = []
  let download = ''
  files.forEach(item => {
    let fileInfo = fs.statSync(item)
    if(fileInfo.size/(1024*1024) < 30) {    // 小于30M
      let arr = item.split('/')
      result.push({
        name: arr[3].replace(/\.(mp3|flac|wav)$/g, ''),
        artist: "专辑-"+arr[2],
        url: 'https://cdn.jsdelivr.net/gh/chen-index/weixi_chen@v2.0.0/music' + item.slice(1),
        cover: 'https://cdn.jsdelivr.net/gh/chen-index/weixi_chen@v2.0.0/music/audio/img/3.jpg',
      })
      download += `https://cdn.jsdelivr.net/gh/chen-index/weixi_chen@v2.0.0/music${item.slice(1)}\n`
    } else {
      console.log('文件大于30M：', item)
    }
  })
  fs.writeFileSync('./audio/list.js', "var list = " + JSON.stringify(result))
  fs.writeFileSync('./audio/download.txt', download)
})