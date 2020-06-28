// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice:[
      '这是第一条公告内容',
      '这是第二条公告内容这是第二条公告内容这是第二条公告内容',
      '这是第三条公告内容',
      '这是第四条公告内容',
      '这是第五条公告内容',
    ],
    noticeText:'这是一条公告内容',
    fontSize: 13,
    marginLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    let noticeLength = _this.data.noticeText.length * _this.data.fontSize * 2
    setInterval(()=>{
      _this.setData({
        marginLeft: _this.data.marginLeft - 1
      },()=>{
        if(_this.data.marginLeft <= -(noticeLength)){ 
          _this.setData({
            marginLeft: 630
          })
        }
      })
    },30);
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