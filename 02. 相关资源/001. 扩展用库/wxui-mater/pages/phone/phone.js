// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 授权获取手机号
   */
  getPhoneNumber: function (e) {
    var that = this;
    var iv = encodeURIComponent(e.detail.iv)  //加密算法的初始向量
    var encryptedData = encodeURIComponent(e.detail.encryptedData)  //包括敏感数据在内的完整用户信息的加密数据
    console.log(e);
    console.log(iv);
    console.log(encryptedData);
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      
    } else {
      // wx.request({
      //   url: App.siteInfo.siteroot + 'getPhoneNumber',
      //   method: "get",
      //   data: {
      //     encryptedData: encryptedData,
      //     iv: iv,
      //     sessionkey: App.siteInfo.sessionkey,
      //     uid: App.siteInfo.uid,
      //     pid:App.siteInfo.pid
      //   },
      //   success: function (res) { 
          
      //   }
      // })
    }
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