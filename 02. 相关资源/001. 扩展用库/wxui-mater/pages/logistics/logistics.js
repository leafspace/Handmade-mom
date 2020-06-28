// pages/logistics/logistics.js
var moment = require('../../miniprogram_npm/moment/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logistics: {
      logisticsNo: "804967979558203287",//快递单号
      logisticsType: "圆通速递",//快递公司
      status: "签收",//快递状态
      info: [
        {
          time: "2019-03-21 15:42:28",//时间锚点
          desc: "【河南省商丘市柘城公司】 已收件"//物流描述
        },
        {
          time: "2019-03-21 15:42:39",
          desc: "【河南省商丘市柘城】 已发出 下一站 【郑州转运中心】"
        },
        {
          time: "2019-03-21 22:11:23",
          desc: "【郑州转运中心】 已收入"
        },
        {
          time: "2019-03-21 22:14:37",
          desc: "【郑州转运中心】 已发出 下一站 【深圳转运中心】"
        },
        {
          time: "2019-03-23 00:55:28",
          desc: "【深圳转运中心】 已收入"
        },
        {
          time: "2019-03-23 00:58:15",
          desc: "【深圳转运中心】 已发出 下一站 【广东省深圳市宝安区灵芝公司】"
        },
        {
          time: "2019-03-23 05:45:18",
          desc: "【广东省深圳市宝安区新城公司】 已收入"
        },
        {
          time: "2019-03-23 10:02:41",
          desc: "【广东省深圳市宝安区新城公司】 派件人 :杨文华 派件中 派件员电话18124166506"
        },
        {
          time: "2019-03-23 12:08:33",
          desc: "客户 签收人 :三巷5号一楼管理处 已签收 感谢使用圆通速递，期待再次为您服务"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let { logistics }  = that.data;
    (logistics.info || []).map((v,k)=>{
      v.month_day = moment(v.time).format('MM-DD')
      v.minute_sec = moment(v.time).format('mm:ss')
    })
    that.setData({
      logistics
    })
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