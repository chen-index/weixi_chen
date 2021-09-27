/**
 * @param {data} 后端返回的基本配置数据
 * @param {param} 页面传过来的数据
 */
 import wx from 'weixin-js-sdk'
 function initAPIs(data, shareInfo) {
     console.log('share')
     console.log(data)
     
    wx.config({
          debug:false ,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId:data.appID, // 必填，公众号的唯一标识
          timestamp:data.timestamp, // 必填，生成签名的时间戳
          nonceStr:data.nonceStr, // 必填，生成签名的随机串
          signature:data.signature,// 必填，签名，见附录1
          jsApiList: [
              // 必填，所有要调用的 API 都要加到这个列表中
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQZone',
              'onMenuShareQQ',
              'onMenuShareWeibo'
          ]
      });
      wx.ready(function () { // 在这里调用 API
          //分享到朋友圈
          wx.onMenuShareTimeline({
              title:shareInfo.name, // 分享标题
              desc:shareInfo.desc, // 分享描述
              link: shareInfo.url, // 分享链接
              imgUrl: shareInfo.img, // 分享图标
              success: function (){ // 用户确认分享后执行的回调函数
                  //alert('分享成功');
              },
              cancel: function (){ // 用户取消分享后执行的回调函数
                  //alert('取消分享');
              },
              fail: function(){ // 用户分享失败后执行的回调函数
                  //alert('分享失败');
              }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
              title:shareInfo.name, // 分享标题
              desc:shareInfo.desc, // 分享描述
              link: shareInfo.url, // 分享链接
              imgUrl: shareInfo.img, // 分享图标
              success: function (){ // 用户确认分享后执行的回调函数
                  // alert('分享朋友成功');
              },
              cancel: function (){ // 用户取消分享后执行的回调函数
                  // alert('取消分享朋友');
              },
              fail: function(){ // 用户分享失败后执行的回调函数
                  // alert('分享朋友失败');
              }
          });
          //分享到qq
          wx.onMenuShareQQ({
              title:shareInfo.name, // 分享标题
              desc:shareInfo.desc, // 分享描述
              link: shareInfo.url, // 分享链接
              imgUrl: shareInfo.img, // 分享图标
              success: function (){ // 用户确认分享后执行的回调函数
                  //alert('分享qq成功');
              },
              cancel: function (){ // 用户取消分享后执行的回调函数
                  //alert('取消分享qq');
              },
              fail: function(){ // 用户分享失败后执行的回调函数
                  //alert('分享qq失败');
              }
          });
          //分享到qq空间
          wx.onMenuShareQZone({
              title:shareInfo.name, // 分享标题
              desc:shareInfo.desc, // 分享描述
              link: shareInfo.url, // 分享链接
              imgUrl: shareInfo.img, // 分享图标
              success: function (){ // 用户确认分享后执行的回调函数
                  //alert('分享qq空间成功');
              },
              cancel: function (){ // 用户取消分享后执行的回调函数
                  //alert('取消分享qq空间');
              },
              fail: function(){ // 用户分享失败后执行的回调函数
                  //alert('分享qq空间失败');
              }
          });
          wx.onMenuShareWeibo({
              title:shareInfo.name, // 分享标题
              desc:shareInfo.desc, // 分享描述
              link: shareInfo.url, // 分享链接
              imgUrl: shareInfo.img, // 分享图标
              success: function (){ // 用户确认分享后执行的回调函数
                  //alert('分享微博成功');
              },
              cancel: function (){ // 用户取消分享后执行的回调函数
                  //alert('取消微博空间');
              },
              fail: function(){ // 用户分享失败后执行的回调函数
                  //alert('分享微博失败');
              }
          });
      })
  } 
  
export default initAPIs