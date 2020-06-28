// pages/count_down/count_down.js
const moment = require('moment')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time_expire: '1734969599',  //2024-12-23 23:59:59
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    setInterval(() => {
      that.generateCountDown(that.data.time_expire)
      that.generateCountDown2(that.data.time_expire)
    }, 1000)
  },

  // 倒计时（时分秒）
  generateCountDown(time_expire) {
    let that = this
    let { time } = that.data
    let countDownSeconds = moment.unix(time_expire).diff(moment(), 'seconds');
    let days = Math.floor(countDownSeconds / (24 * 3600));
    let hours = Math.floor((countDownSeconds % (24 * 3600)) / 3600);
    let minutes = Math.floor((countDownSeconds % 3600) / 60);
    let seconds = countDownSeconds % 60;  
    let show = `${days < 10 ? '0' + days : days}天${hours < 10 ? '0' + hours : hours}时${minutes < 10 ? '0' + minutes : minutes}分${seconds < 10 ? '0' + seconds : seconds}秒`
    that.setData({
      time: show
    })
    return { days, hours, minutes, seconds, show, countDownSeconds };
  },

  generateCountDown2(time_expire) {
    let that = this
    let { time2 } = that.data
    let countDownSeconds = moment.unix(time_expire).diff(moment(), 'seconds');
    let hours = Math.floor(countDownSeconds / 3600);
    let minutes = Math.floor((countDownSeconds % 3600) / 60);
    let seconds = countDownSeconds % 60;
    let show = `${hours < 10 ? '0' + hours : hours}时${minutes < 10 ? '0' + minutes : minutes}分${seconds < 10 ? '0' + seconds : seconds}秒`
    that.setData({
      time2: show
    })
    return { hours, minutes, seconds, show, countDownSeconds };
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
    clearInterval(this.data.activityTime)
    clearInterval(this.data.goodsTime)
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