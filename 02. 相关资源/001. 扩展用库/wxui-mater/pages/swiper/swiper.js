// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      { id: 1, url: 'http://www.pinnoocle.net/static/index/img/banner1-min.png' },
      { id: 2, url: 'http://www.pinnoocle.net/static/index/img/banner2-min.png' },
      { id: 3, url: 'http://www.pinnoocle.net/static/index/img/banner3-min.png' },
    ],
    current: 1,
    current2: 0
  },

  swiperChange(e){
    this.setData({
      current: e.detail.current + 1
    })
  },

  swiperChange2(e){
    this.setData({
      current2: e.detail.current
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