//获取应用实例
var app = getApp()
Page({
  data: {
    myInfro:[],
    money:[],
    hasData:true,
    isHidden:true,
    hide:"hide",
    noHid:"noHid"
  },

  showMoney: function () {
    wx.navigateTo({
      url: '../myself/myMoney/myMoney'
    })
  },

  setEvent: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    })
    console.log(this.data.isHidden)
  },

  callKeHu: function () {
    wx.makePhoneCall({
      phoneNumber: '17733689080'
    })
  },

  modifyPassword: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/modifyPassword/modifyPassword'
    })
  },

  directionsForUse: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/directionsForUse/directionsForUse'
    })
  },

  feedBack: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/feedBack/feedBack'
    })
  },

   loginOut: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    })
    // wx.navigateTo({
    //   url: '../login/login'
    // })
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.redirectTo({
      url: '../login/login'
    })
  },

  

// 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
        title: ' '
    })
    var that = this
    //更新数据
      that.setData({
        money:[
          {"url":"../images/wallet.png","title":"我的钱包","content":"3000.00元","indicator":"../images/next.png"},
        ],
         myInfro:[
          {"url":"../images/shop.png","title":"商家名称","content":"老码头火锅"},
          {"url":"../images/zuoji.png","title":"商家座机","content":"028-1234567"},
          {"url":"../images/phone.png","title":"商家手机","content":"12345678912"},
          {"url":"../images/address.png","title":"商家地址","content":"天府三街新希望国际B"},
          {"url":"../images/bangding.png","title":"绑定账户","content":"成都银行 ************1231"}
        ]
      })
  }
})