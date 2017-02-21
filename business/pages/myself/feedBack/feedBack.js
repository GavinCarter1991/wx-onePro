// pages/myself/myMoney/feedBack.js
Page({
  data: {
  },

  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  },
    onLoad: function () {
    wx.setNavigationBarTitle({
        title: '反馈意见'
    })
    }
})
