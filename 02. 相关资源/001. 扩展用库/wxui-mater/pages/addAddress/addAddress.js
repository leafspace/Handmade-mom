// pages/add_address/add_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: '',
    set_default: true
  },

  // 地图选择
  selectHandle() {
    let that = this
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          location: res.address
        })
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },

  //设为默认
  setDefaultHandle() {
    let that = this
    that.setData({
      set_default: !that.data.set_default
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