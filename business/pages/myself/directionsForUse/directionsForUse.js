// pages/myself/myMoney/directionsForUse.js
Page({
  data: {
  },

   onLoad: function () {
    wx.setNavigationBarTitle({
        title: '财务管理'
    }),
    wx.showModal({
      title: '提示',
      content: '不好意思，微信小程序不能加载网页',
      success: function(res) {
        if (res.confirm) {
          wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
            success: function(res){
              // success
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }
    }
})
    var that = this
    //更新数据
      that.setData({
      })
  }
})