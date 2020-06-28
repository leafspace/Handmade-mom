// pages/mall/mall.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: 0,
    category_list:[
      { id: 0, name: '推荐' },
      { id: 1, name: '卫浴' },
      { id: 2, name: '全屋定制' },
      { id: 3, name: '软装' },
      { id: 4, name: '灯具' },
      { id: 5, name: '厨电' },
      { id: 6, name: '背景墙' },
      { id: 7, name: '冷暖' },
      { id: 8, name: '家具' },
      { id: 9, name: '智能家居' },
      { id: 10, name: '生活类' },
      { id: 11, name: '瓷砖' }
    ],
    banner:[
      { id: 1, url: 'http://www.pinnoocle.net/static/index/img/banner1-min.png' },
      { id: 2, url: 'http://www.pinnoocle.net/static/index/img/banner2-min.png' },
      { id: 3, url: 'http://www.pinnoocle.net/static/index/img/banner3-min.png' },
    ],
  },

  
  /**
   * 搜索
   */
  searchHandle(){
    wx.navigateTo({
      url: '/pages/search-wrap/searchMain/searchMain',
    })
  },

  /**
   * 分类
   */
  navHandle(e){
    let that = this
    that.setData({
      category: e.currentTarget.dataset.index
    })
  },

  /**
   * 跳转
   */
  toPath: function (e) {
    var path = e.currentTarget.dataset.path;
    App.navigationTo(path);
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