// pages/component_demo/component_demo.js
// 父组件传值给子组件: banner="{{banner}}"
// 父组件传方法给子组件: bind:swiperHandle="swiper" 

// var banner = this.selectComponent('#banner')
// 获取子组件中data数据: banner.data.msg
// 获取子组件方法: banner._childRun()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      { id: 1, img: 'http://www.pinnoocle.net/static/index/img/banner1-min.png', url:'pages/menu/menu' },
      { id: 2, img: 'http://www.pinnoocle.net/static/index/img/banner2-min.png', url:'pages/mine/mine' },
      { id: 3, img: 'http://www.pinnoocle.net/static/index/img/banner3-min.png', url:'pages/mall/mall' },
    ],
    customValue:"狡童\n彼狡童兮\n不与我言兮\n维子之故\n使我不能餐兮\n彼狡童兮\n不与我食兮\n维子之故\n使我不能息兮",
    current: 1
  },

  swiper(value){
    // console.log(value)
    this.setData({
      current: value.detail.current + 1
    })
  },

  getChildFunction(){
    var banner = this.selectComponent('#banner')
    // 父组件里执行子组件的方法
    banner._childRun()
    // 获取子组件中data数据
    console.log(banner.data.msg)
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