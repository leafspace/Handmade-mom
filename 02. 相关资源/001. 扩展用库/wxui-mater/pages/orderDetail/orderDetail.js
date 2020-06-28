// pages/orderDetail/orderDetail.js
var moment = require('moment');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time_expire: '1765532125',
    time:''
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

  // 倒计时（时分秒）
  generateCountDown(time_expire) {
    let that = this
    let { timer_status, time } = that.data
    let countDownSeconds = moment.unix(time_expire).diff(moment(), 'seconds');
    let hours = Math.floor(countDownSeconds / 3600);
    let minutes = Math.floor((countDownSeconds - hours * 3600) / 60);
    let seconds = countDownSeconds % 60;
    let show = `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    that.setData({
      time: show
    })
    return { hours, minutes, seconds, show, countDownSeconds };
  },

  //取倒计时（天时分秒）
  // generateCountDown(time_expire) {
  //   let that = this
  //   // 计算目标与现在时间差（毫秒）
  //   let time1 = (new Date(time_expire).getTime()) * 1000;
  //   let  time2 = new  Date().getTime();
  //   let  mss = time1 - time2;
  //   console.log('time1', time1)
  //   console.log('time2', time2)
  //   // 将时间差（毫秒）格式为：天时分秒
  //   let  days = parseInt(mss / (1000 * 60 * 60 * 24));
  //   let  hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   let  minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  //   let  seconds = parseInt((mss % (1000 * 60)) / 1000);

  //   let show = `${days > 0 ? days + ':' : '00'}${hours > 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  //   that.setData({
  //     timeInfo: show,
  //     days: days > 0 ? days > 10 ? days : '0' + days : '00',
  //     hours: hours > 10 ? hours : '0' + hours,
  //     minutes: minutes > 10 ? minutes : ('0' + minutes),
  //     seconds: seconds > 10 ? seconds : ('0' + seconds),
  //   })
  //   return  days + "天" + hours + "时" + minutes + "分" + seconds + "秒"
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    setInterval(()=>{
      that.generateCountDown(that.data.time_expire)
    },1000)
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