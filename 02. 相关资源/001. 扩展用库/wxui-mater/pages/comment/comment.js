// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    score: 3,  //总体评分
    tagArr: [
      { val: '导购专业', status: false },
      { val: '商品丰富', status: false },
      { val: '设计新颖', status: false },
      { val: '价格合理', status: false },
      { val: '选材优良', status: false },
      { val: '售后放心', status: false },
      { val: '送装无忧', status: false },
      { val: '订货期快', status: false },
    ],
    tags: [],  //标签
    retail: '',  //评语
    image: [],  //图片
  },

  //总体评价
  starHandle(e) {
    let that = this
    let { score } = that.data
    let num = e.currentTarget.dataset.num
    that.setData({
      score: num
    })
  },

  // 选择标签
  tagHandle(e) {
    let that = this
    let { tagArr, tags } = that.data
    let id = e.currentTarget.id
    if (tags.includes(tagArr[id]['val'])) {
      tagArr[id]['status'] = false
      let tagsNew = tags.filter(v => {
        return v != tagArr[id]['val'];
      })
      that.setData({
        tagArr,
        tags: tagsNew
      })
    } else {
      tagArr[id]['status'] = true
      tags.push(tagArr[id]['val'])
      that.setData({
        tagArr,
        tags
      })
    }
  },

  // 评语
  textAreaHandle(e) {
    let that = this
    let { retail } = that.data
    that.setData({
      retail: e.detail.value
    })
  },

  // 上传图片
  chooseImage: function (e) {
    var that = this;
    let { image } = that.data
    wx.chooseImage({
      count: 6,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        }, () => {
          // res.tempFilePaths.map((v, k) => {
          //   wx.showLoading({
          //     title: '图片' + (k + 1) + '上传中',
          //   })
          //   wx.uploadFile({
          //     url: '',
          //     filePath: v,
          //     name: 'file',
          //     success: function (res) {
          //       wx.hideLoading()
          //       console.log(res)
          //       var data = JSON.parse(res.data)
          //       image.push(data.url);
          //       that.setData({
          //         image
          //       })
          //     },
          //     fail(e) {
          //       console.log(e)
          //     },
          //   })
          // })
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  commentHandle() {
    // let that = this
    // wx.request({
    //   url: '',
    //   data: {
    //     user_id: wx.getStorageSync('userid'),
    //     num: that.data.score,
    //     tags: that.data.tags,
    //     retail: that.data.retail,
    //     image: that.data.image,
    //   },
    //   method: 'post',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     wx.showToast({
    //       title: res.data.msg,
    //     })
    //   }
    // })
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