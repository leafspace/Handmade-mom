// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    current_cate:0,
    market:[
      {
        id:1,
        name:'进口家居馆',
        cate: [
          {
            pic: 'https://qn.hfderlook.cn/images_5da7178894688.jpg',
            store_name: '威能 东芝',
            tag:'供暖',
            view:'24',
            store_address:'合肥第六空间蜀山店国际建材馆B224'
          },
          {
            pic: 'https://qn.hfderlook.cn/images_5da6faed0d01c.jpg',
            store_name: 'HKS',
            tag: '进口丨地板',
            view: '5',
            store_address: '合肥第六空间蜀山店国际建材馆B305'
          },
          {
            pic: 'https://qn.hfderlook.cn/images_5da7178894688.jpg',
            store_name: '威能 东芝',
            tag: '供暖',
            view: '24',
            store_address: '合肥第六空间蜀山店国际建材馆B224'
          },
          {
            pic: 'https://qn.hfderlook.cn/images_5da6faed0d01c.jpg',
            store_name: 'HKS',
            tag: '进口丨地板',
            view: '5',
            store_address: '合肥第六空间蜀山店国际建材馆B305'
          }
        ]
      },
      {
        id: 2,
        name: '国际建材馆',
        cate: [
          {
            pic: 'https://qn.hfderlook.cn/images_5da6faed0d01c.jpg',
            store_name: 'HKS',
            tag: '进口丨地板',
            view: '5',
            store_address: '合肥第六空间蜀山店国际建材馆B305'
          }
        ]
      },
      {
        id: 3,
        name: '设计生活馆',
        cate: [
          {
            pic: 'https://qn.hfderlook.cn/images_5da7178894688.jpg',
            store_name: '威能 东芝',
            tag: '供暖',
            view: '24',
            store_address: '合肥第六空间蜀山店国际建材馆B224'
          },
          {
            pic: 'https://qn.hfderlook.cn/images_5da6faed0d01c.jpg',
            store_name: 'HKS',
            tag: '进口丨地板',
            view: '5',
            store_address: '合肥第六空间蜀山店国际建材馆B305'
          }
        ]
      }
    ]
  },
  
  /**
   * 横向
   */
  currentHandle(e) {
    let that = this
    that.setData({
      current: e.currentTarget.dataset.index
    })
  },

  /**
   * 竖向
   */
  currentCateHandle(e) {
    let that = this
    that.setData({
      current_cate: e.currentTarget.dataset.index,
      scrollTop: 0
    })
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