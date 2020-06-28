// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctxWidth: '',  //画布宽度
    ctxHeight: '',  //画布高度
    poster: '/img/poster.jpg',
    storeLogo: '/img/storeLogo.jpg',
    pic:'/img/pic.jpg',
    qrcode:'/img/qrcode.jpg',

    canvasImg: '', //画布最终保存图片
    avatarUrl: '', //用户头像
    nickName:'', //用户昵称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.showLoading({
      title: '海报生成中',
    })
    let userInfo = wx.getStorageSync('userInfo')
    that.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickName,
    },()=>{
      that.canvasHandle()
    })
  },

  canvasHandle(){
    let that = this
    let { poster, storeLogo, pic, qrcode, avatarUrl, nickName, canvasImg } = that.data
    const ctx = wx.createCanvasContext('main')
    ctx.beginPath()
    ctx.drawImage(poster, 0, 0, 360, 640);
    ctx.restore()

    // 店铺信息
    ctx.beginPath()
    ctx.setFillStyle('#F1F1F1')
    ctx.fillRect(38, 295, 46, 46)
    ctx.drawImage(storeLogo, 39, 296, 44, 44);
    ctx.restore()
    
    ctx.beginPath()
    ctx.lineJoin = "round";
    ctx.setStrokeStyle('#DCAC7E')
    ctx.setFillStyle('#333333')
    ctx.setFontSize(16)
    ctx.fillText('店铺名称', 96, 311)
    ctx.setFillStyle('#AAA9AA')
    ctx.setFontSize(12)
    ctx.fillText('家具丨原创丨设计', 96, 333)
    ctx.setFillStyle('#ffffff')
    ctx.setFontSize(17)
    const metrics = ctx.measureText('100')
    let leftNum = (46 - (metrics.width)) / 2 + 280
    ctx.fillText('100', leftNum, 299)
    ctx.setFontSize(11)
    ctx.fillText('口碑值', 287, 316)
    ctx.drawImage(pic, 14, 354, 329, 120);
    ctx.restore()
    
    // 用户信息
    ctx.beginPath()
    ctx.save()
    ctx.arc(54, 514, 18, 0, Math.PI * 2, false);
    ctx.setFillStyle('#EEEEEE')
    ctx.fill()
    ctx.clip();
    ctx.drawImage(avatarUrl, 36, 496, 36, 36);
    ctx.restore();
    ctx.beginPath()
    ctx.setFillStyle('#000000')
    ctx.setFontSize(16)
    ctx.fillText(nickName, 82, 511)
    ctx.drawImage(qrcode, 225, 484, 90, 90);
    ctx.restore()

    wx.hideLoading()
    ctx.draw(false, function (e) {
      wx.canvasToTempFilePath({
        // destWidth: that.data.ctxWidth * that.data.pixelRatio,
        // destHeight: that.data.ctxHeight * that.data.pixelRatio,
        destWidth: 1080,
        destHeight: 1920,
        canvasId: 'main',
        success: function (res) {
          console.log(res.tempFilePath)
          wx.setStorageSync('canvasImg', res.tempFilePath)
          that.setData({
            canvasImg: res.tempFilePath
          })
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              wx.showToast({
                title: '保存成功',
                icon: 'success',
              })
            }
          })
        }
      })
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