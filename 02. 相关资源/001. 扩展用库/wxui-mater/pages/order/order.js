// pages/order/order.js
var moment = require('moment');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    time:[
      { time_expire: '1765532125' },   //2025-12-12 17:35:25
      { time_expire: '1760068800' },   //2025-10-10 12:00:00
    ],
    timer_status:''
  },

  orderDetail(){
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail',
    })
  },

  currentHandle(e) {
    let that = this
    let { current } = that.data
    let index = e.currentTarget.dataset.index;
    that.setData({
      current: index
    })
  },

  /**
   * 处理待支付订单倒计时
   */
  handleCountDownCancel(){
    let that = this
    let { timer_status, time } = that.data
    if (Boolean(timer_status)) clearInterval(timer_status);
    timer_status = setInterval(()=>{
      (time || []).map((v,k)=>{
        if (v.time_expire > 0){
          v.countDown = that.generateCountDown(v.time_expire)
        }
      })
      that.setData({
        time
      })
    },1000)
  },

  // 倒计时
  generateCountDown(time_expire){
    let that = this
    let { timer_status, time } = that.data
    let countDownSeconds = moment.unix(time_expire).diff(moment(), 'seconds');
    let hours = Math.floor(countDownSeconds / 3600);
    let minutes = Math.floor((countDownSeconds - hours * 3600) / 60);
    let seconds = countDownSeconds % 60;
    let show = `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    return { hours, minutes, seconds, show, countDownSeconds };
  },

  // 取消订单
  cancelHandle(){
    wx.showModal({
      title: '提示',
      content: '确认取消该笔订单吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 查看物流
  logisticsHandle(){
    wx.navigateTo({
      url: '/pages/logistics/logistics',
    })
  },

  // 去评价
  commentHandle() {
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleCountDownCancel()
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