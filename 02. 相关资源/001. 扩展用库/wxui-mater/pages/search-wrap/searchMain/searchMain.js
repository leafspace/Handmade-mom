// pages/searchMain/searchMain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    history: ['哈哈哈', '呵呵', '哟', '嘻嘻嘻', '哒哒', '嘤嘤嘤', '喵喵喵', '噢', '啊啊啊','哦哦']
  },

  historyHandle(e){
    let that = this
    let { value, history } = that.data
    that.setData({
      value: history[e.currentTarget.id]
    })
  },

  delHandle(){
    let that = this
    let { history } = that.data
    that.setData({
      history: []
    })
  },

  searchResult(){
    wx.navigateTo({
      url: '/pages/search-wrap/searchResult/searchResult?parameter=' + this.data.value,
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