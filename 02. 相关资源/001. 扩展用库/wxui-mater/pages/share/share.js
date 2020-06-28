// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareStatus: false
  },

  /**
   * 分享-微信好友
   */
  shareHandle(){
    let _this = this
    _this.setData({
      shareStatus: !_this.data.shareStatus
    })
  },

  /**
   * 分享-生成海报
   */
  posterHandle(){
    wx.navigateTo({
      url: '',
    })
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