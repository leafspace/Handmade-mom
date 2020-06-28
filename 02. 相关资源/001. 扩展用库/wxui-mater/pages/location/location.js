// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'请选择',
    first: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getSetting({//先获取用户当前的设置
    //   success(res) {
    //     console.log(res)
    //     if (!res.authSetting['scope.address']) {
    //       wx.authorize({
    //         scope: 'scope.address',
    //         success(res) {
    //           console.log(res.errMsg);//用户授权后执行方法
    //           wx.chooseAddress({
    //             success: res => {

    //             }
    //           })
    //         },
    //         fail(res) {
    //           //用户拒绝授权后执行
    //           console.log("点击了拒绝，authorize--fail用户拒绝过");
    //         }
    //       })
    //     }
    //   }
    // })
  },
  locationHandle(){
    let that = this
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.address']) { //如果用户没有打开地址授权的话，弹出地址授权请求
          wx.authorize({
            scope: 'scope.address',
            success() {
              //打开选择地址
              wx.chooseAddress({
                success: function (res) {
                  that.setData({
                    address: res.provinceName + res.cityName + res.countyName + res.detailInfo,
                  });

                }
              })
            },
            fail(){
              // console.log("用户点击了拒绝");
              wx.showModal({
                title: '提示',
                content: '使用微信地址导入功能，需授权微信通讯地址读取权限',
                success(res) {
                  if (res.confirm) {
                    wx.openSetting({
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })
        } else {
          //打开选择地址
          wx.chooseAddress({
            success: function (res) {
              that.setData({
                address: res.provinceName + res.cityName + res.countyName + res.detailInfo,
              });
            }
          })
        }
      }
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