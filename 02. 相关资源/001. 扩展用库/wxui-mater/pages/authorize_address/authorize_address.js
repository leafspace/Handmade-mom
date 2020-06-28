// pages/authorize_address/authorize_address.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  

  getAddress(){
    let that = this;
    wx.getLocation({ 
      type: 'wgs84',
      success(res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.setStorageSync('latitude', latitude)
        wx.setStorageSync('longitude', longitude)
        that.getLocal(res.latitude, res.longitude);
      },
      fail(e){
        console.log(e)
        that.againGetLocation()
      }
    }) 
  },

  getLocal: function (latitude, longitude) {
    let that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(res)
        wx.setStorageSync('user_address', res.result.address)
        that.setData({
          user_address:res.result.address
        })
        // that._get('wap.index/changeAddress', { address:user_address }, (res) => {
          
        // })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
      }
    });
  },

  // 拒绝授权后再次获取用户地址
  againGetLocation(){
    let that = this;
    wx.getSetting({
      success: (res) => {
        console.log(res)
        //非初始化进入该页面,且未授权
        if(res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true){
          wx.showModal({
            title: '是否授权当前位置',
            content: '需要获取您的地理位置，请确认授权，否则无法获取您所需数据',
            success(res){
              if (res.cancel) {
                wx.showToast({   
                  title: '授权失败',
                  icon: 'none',
                  duration: 1000
                })
                setTimeout(()=>{
                  that.againGetLocation()
                },500)
              }else if(res.confirm){
                wx.openSetting({
                  success: (data) => {
                    if (data.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      that.getAddress()
                    }else{
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                      setTimeout(()=>{
                        that.againGetLocation()
                      },500)
                    }
                  },
                })
              }
            },
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //初始化进入
          that.getAddress()
        }else{
          //授权后默认加载
          that.getAddress()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KUTBZ-7MFCP-5RUDQ-VXJ7V-CUIIE-46B65' //这里自己的key秘钥进行填充
    });
    this.getAddress()
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