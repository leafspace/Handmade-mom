// pages/popup/popup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textStatus:false,
    nodes:"<div style='color:#999'><p>富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容</p><img src='http://www.pinnoocle.net/static/index/img/banner-new.png' alt=''><p style='color:#f00'>Hello World</p><p>富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容</p><p>富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容</p><p style='color:#f00'>Hello World</p><p>富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容富文本内容</p></div>",
    formStatus:false,
    region: ['广东省', '广州市', '海珠区']
  },

  /**
   * 富文本弹窗
   */
  textHandle(){
    let that = this
    that.setData({
      textStatus: !that.data.textStatus
    })
  },

  /**
   * 表单弹窗
   */
  formHandle(){
    let that = this
    that.setData({
      formStatus: !that.data.formStatus
    })
  },

  /**
   * 选择地址
   */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 表单提交
   */
  formSubmit(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let { nodes } = that.data
    that.setData({
      nodes: nodes.replace('<img', '<img style="display:block;width:100%;height:auto;"')
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