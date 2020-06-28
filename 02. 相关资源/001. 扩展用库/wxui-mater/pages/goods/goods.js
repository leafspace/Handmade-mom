// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      { id: 1, pic: "http://mlc-xiaodian.oss-cn-shanghai.aliyuncs.com/dev/xd/upload/1/6/2019-08-24/5d60b3036a7f8.jpg", name:"手持小风扇", sub_title:"小巧可爱，颜值高，方便携带", price:'999.00', line_price:'1099.00' },
      { id: 1, pic: "http://mlc-xiaodian.oss-cn-shanghai.aliyuncs.com/dev/xd/upload/1/6/2019-08-24/5d60b3036a7f8.jpg", name:"手持小风扇", sub_title:"小巧可爱，颜值高，方便携带", price:'999.00', line_price:'1099.00' },
    ]
  },

  goodsDetail(e){
    let that = this
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=' + id,
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