// pages/orderManage/orderDeatail.js
Page({
  data:{
    orderNum: 123456789,
    appointmentNum: 5,
    appointmentTime: '2017年2月16日  11:42',
    orderTime: '2017年1月16日  11:42',
    hasData: true,
    navTab: ["全部", "待处理", "待接待", "已完成", "客户处理"],
    moneyInfo: [,,,,,,,],
    nickName: '恋人心',
    phoneNum: '18202801506',
    url: 'http://60.205.161.252//Public/uploads/app/2016-12-15/58523b031fa7b.png',
    statusImage: ['../images/daijiedai.png'],
    statusText: ['待接待未付款'],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
        title: '订单详情'
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})