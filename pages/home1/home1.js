// pages/home1/home1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    tabBarList:[
      {
        "pagePath": "/pages/home1/home1",
        "text": "我的1",
        "iconPath":  "/image/icon.png",
        "selectedIconPath": "/image/icon.png"
      },
      {
        "pagePath": "/pages/home2/home2",
        "text": "我的2",
        "iconPath": "/image/icon.png",
        "selectedIconPath": "/image/icon.png"
      },
      {
        "pagePath": "/pages/home3/home3",
        "text": "我的3",
        "iconPath": "/image/icon.png",
        "selectedIconPath": "/image/icon.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})