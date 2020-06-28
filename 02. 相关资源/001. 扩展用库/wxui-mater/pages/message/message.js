// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getMessage: function () {
    var that = this;
    if (wx.requestSubscribeMessage) {
      wx.requestSubscribeMessage({
        tmplIds: [],  //需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息
        success(res) {
          console.log(res)
          let keysArr = Object.keys(res).filter((v, k) => {
            if (res[v] == 'accept') {
              return v
            }
          })
          // console.log(keysArr)
          if (keysArr.length > 0) {
            var user_id = wx.getStorageSync('userid')
            var open_id = wx.getStorageSync('openid')
            if (user_id) {
              // wx.request({
              //   url: Api + '/Index/save_subscribe',
              //   data: {
              //     user_id,
              //     open_id,
              //     tempids: keysArr.join(",")
              //   },
              //   method: 'GET',
              //   success: function (e) {
              //     that.setData({
              //       tx: 1,
              //       yy_word: '已预约'
              //     })
              //   }
              // })
            }

          } else {
            console.log('用户未同意！')
          }
        }, fail(res) {
          console.log(res)
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
      return;
    }
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