//app.js
App({

  onLaunch: function () {
    var that = this
    wx.getSystemInfo({  
    success: function (res) { 
      that.globalData.screenWidth = res.windowWidth;  
      that.globalData.screenHight = res.windowHeight; 
      that.globalData.screenWidthScale = res.windowWidth/750;  
      that.globalData.screenHightScale = res.windowHeight/1334;
    }
    })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    screenWidthScale:0.0,
    screenHightScale:0.0,
    screenWidth:0,
    screenHight:0
  }
})