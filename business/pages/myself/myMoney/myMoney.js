//获取应用实例
var app = getApp()
Page({
  data: {
      balance:3000.00
  },

  allDeposit: function () {
    this.setData ({
      deposit: this.data.balance
    })
  },

// 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
        title: '我的钱包'
    })
    var that = this
    //更新数据
      that.setData({
      })
  }
})