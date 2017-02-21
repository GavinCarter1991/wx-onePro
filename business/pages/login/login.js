//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    phone: '',
    password:''
  },

// 打电话
  call:function () {
    wx.makePhoneCall({
      phoneNumber:"028-86051215" 
    })
  },

// 获取输入电话号码
  phoneInput :function (e) {
    this.setData({
      phone:e.detail.value
    })
  },

// 获取输入密码
  passwordInput :function (e) {
    this.setData({
      password:e.detail.value
    })
  },

// 登录
  login: function () {
    if(this.data.phone.length == 0 || this.data.password.length == 0){
      wx.showToast({  
        title: '用户名和密码不能为空',  
        icon: 'loading',  
        duration: 2000  
      })  
  }else {
    // wx.request({
    //   url: 'http://60.205.161.252/index.php/Api/Business/login',
    //   data:{
    //     shop_account:this.data.phone,
    //     shop_password:this.data.password
    //   },
    //   method: 'POST',
    //   success: function(res){
    //     if(res.statusCode  != '0') {
          wx.switchTab({
            url: "../orderManage/orderManage"
          })
  //       }else {
  //          wx.showToast({  
  //           title: res.errMsg,  
  //           icon: 'loading',  
  //           duration: 2000  
  //         })
  //       }
  //     },
  //   })
  }  
  },

// 加载
  onLoad: function () {
    var that = this
     wx.switchTab({
       url: "../orderManage/orderDeatail/orderDeatail"
     })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        imageWidth:app.globalData.screenWidth,
        imageHeight:app.globalData.screenHightScale*650,
        inputViewWidth:app.globalData.screenWidth,
        inputViewHeight:app.globalData.screenHightScale*88,
        inputWidth:app.globalData.screenWidth,
        inputHeight:app.globalData.screenHightScale*177
      })
    })
  }
})
