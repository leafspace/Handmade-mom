// pages/canvas/canvas.js
import regeneratorRuntime from '../../utils/runtime.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasImg: '', //画布最终保存图片
    avatarUrl: '', //用户头像
    nickName:'', //用户昵称
    loading:true
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

  async canvasHandle(){
    let that = this
    console.log(that.data.avatarUrl)
    console.log(that.data.nickName)
    let { canvasImg } = that.data
    const ctx = wx.createCanvasContext('main')
    //获取头像图片信息
    await new Promise((resolve) => {
      wx.getImageInfo({
        src: that.data.avatarUrl,
        success(res) {
          that.setData({
            avatarUrlNew: res.path
          }, () => { resolve(true) })
        },
        fail: function (e) {
          resolve(e.errMsg || '出错了')
        }
      })
    })

    //获取二维码图片信息
    await new Promise((resolve) => {
      wx.getImageInfo({
        src: 'http://www.pinnoocle.net/static/index/img/xcxcode.jpg',
        success(res) {
          that.setData({
            qrcodeNew: res.path
          }, () => { resolve(true) })
        },
        fail: function (e) {
          resolve(e.errMsg || '出错了')
        }
      })
    })

    ctx.beginPath()
    ctx.setFillStyle('#fff')
    that.roundRectColor(ctx, 0, 0, 320, 440, 20);
    ctx.restore()

    // 用户信息
    ctx.beginPath()
    ctx.save()
    ctx.arc(160, 60, 33, 0, Math.PI * 2, false);
    ctx.setFillStyle('#ffffff')
    ctx.fill()
    ctx.clip();
    ctx.drawImage(that.data.avatarUrlNew, 127, 27, 66, 66);
    ctx.restore();
    ctx.beginPath()
    ctx.setFillStyle('#333333')
    ctx.setFontSize(20)
    let metrics = ctx.measureText(that.data.nickName)
    let leftNum = (320 - (metrics.width)) / 2
    ctx.fillText(that.data.nickName, leftNum, 130)
    ctx.setFillStyle('#888888')
    ctx.setFontSize(12)
    let metrics2 = ctx.measureText('合肥市皮诺客科技有限公司')
    let leftNum2 = (320 - (metrics2.width)) / 2
    ctx.fillText('合肥市皮诺客科技有限公司', leftNum2, 155)
    ctx.drawImage(that.data.qrcodeNew, 60, 194, 200, 200);
    ctx.restore()

    wx.hideLoading()
    that.setData({
      loading: false
    }, () => {
      ctx.draw(false, function (e) {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          destWidth: 1080,
          destHeight: 1485,
          canvasId: 'main',
          success: function (res) {
            console.log(res.tempFilePath)
          }
        })
      })
    })

  },

  //绘制圆角矩形（纯色填充）
  roundRectColor(context, x, y, w, h, r) {  
    context.save();
    context.setFillStyle("#fff");
    context.setStrokeStyle('#fff')
    context.setLineJoin('round');
    context.setLineWidth(r);
    context.strokeRect(x + r / 2, y + r / 2, w - r, h - r);
    context.fillRect(x + r, y + r, w - r * 2, h - r * 2);
    context.stroke();
    context.closePath();
  },

  //保存图片
  saveHandle: function () {
    var that = this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      destWidth: 1080,
      destHeight: 1485,
      canvasId: 'main',
      success: function (res) {
        console.log(res.tempFilePath)
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