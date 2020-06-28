// pages/audio/audio.js
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioPlay: false,
    duration: 0,
    praise: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    innerAudioContext.src = "https://qn.hfderlook.cn/images_5e97dae19607e.mp3";
    innerAudioContext.currentTime;
    //运行一次
    innerAudioContext.play();
    innerAudioContext.pause();
    innerAudioContext.onCanplay(() => { 
      innerAudioContext.duration;
      setTimeout(()=>{
        that.setData({
          duration: Math.ceil(innerAudioContext.duration)
        })
      },500)
    })
  },

  // 音频
  audioHandle(){
    let that = this;
    let { audioPlay } = that.data;
    if(!audioPlay){
      innerAudioContext.play()
    }else{
      innerAudioContext.pause()
    }

    innerAudioContext.onPlay(function(){
      that.setData({
        audioPlay: true,
      })
    }) 
    innerAudioContext.onPause(function(){
      that.setData({
        audioPlay: false
      })
    }) 
    innerAudioContext.onEnded(function(){
      that.setData({
        audioPlay: false
      })
    }) 
  },

  praiseHandle(){
    let _this = this
    _this.setData({
      praise: !_this.data.praise
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
    innerAudioContext.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.stop()
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