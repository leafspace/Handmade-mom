// pages/moment_info/moment_info.js
const moment = require('moment')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    setInterval(() => {
      that.setData({
        now1: moment().format("YYYY-MM-DD HH:mm:ss"),
        now2: moment().year(),
        now3: moment().month() + 1,
        now4: moment().date(),
        now5: moment().hours(),
        now6: moment().minutes(),
        now7: moment().seconds(),
        now8: moment().daysInMonth(),
        now9: moment().startOf('month').format("YYYY-MM-DD HH:mm:ss"),
        now10: moment().endOf('month').format("YYYY-MM-DD HH:mm:ss"),
        now11: moment().startOf('day').format("YYYY-MM-DD HH:mm:ss"),
        now12: moment().endOf('day').format("YYYY-MM-DD HH:mm:ss"),
        now13: moment().startOf('week').format("YYYY-MM-DD HH:mm:ss"),
        now14: moment().endOf('week').format("YYYY-MM-DD HH:mm:ss"),
        now15: moment().startOf('isoWeek').format("YYYY-MM-DD HH:mm:ss"),
        now16: moment().endOf('isoWeek').format("YYYY-MM-DD HH:mm:ss"),
        // now17: moment().isoWeekday(),  //(1~7, 1: Monday, 7: Sunday)
        // now17: moment().day(),  //(0~6, 0: Sunday, 6: Saturday)
        now17: moment().weekday(), //(0~6, 0: Sunday, 6: Saturday)
        now18: moment().weekday(5).format("YYYY-MM-DD HH:mm:ss"),
        now19: moment().weekday(-2).format("YYYY-MM-DD HH:mm:ss"),
        now20: moment().format("YYYY年MM月DD日"),
        now21: moment().format("YYYY-MM-DD"),
        now22: moment().format("HH时mm分ss秒"),  //24小时制
        now23: moment().format("hh:mm:ss"),   //12小时制'xx:xx:xx am/pm'
        now24: moment().format('x'),
        now25: moment().valueOf(),
        now26: moment().format('X'),
        now27: moment().unix(),
        now28: moment(1577085998784).format("YYYY-MM-DD HH:mm:ss"),
        now29: moment().toArray(), // [years, months, date, hours, minutes, seconds, milliseconds], 
        now30: moment().toObject(), // {years: xxxx, months: x, date: x, hours: x, minutes: x, seconds: x, milliseconds: x}
        now31: moment().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'),
        now32: moment().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
        now33: moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
        now34: moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        now35: moment().subtract(1, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        now36: moment().subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss'),
        now37: moment().add(2, 'week').format('YYYY-MM-DD HH:mm:ss'),
        now38: moment().add(1, 'month').startOf('month').weekday(),
        now39: moment().subtract(1, 'month').startOf('month').weekday(),
        now40: moment().startOf('month').weekday(),
      })
    }, 1000)
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