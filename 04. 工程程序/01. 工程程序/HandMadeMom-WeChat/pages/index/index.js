//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        targetUrl: '',
        imgUrl: '/img/adv.png'
      },
      {
        targetUrl: '',
        imgUrl: '/img/pic.jpg'
      },
      {
        targetUrl: '',
        imgUrl: '/img/goods.png'
      }
    ],

    recommendList: [
      {
        goodsId: '1',
        goodsImgUrl: '/img/goods.png',
        goodsTitle: '推荐商品1',
        goodsPrice: '999',
      },
      {
        goodsId: '2',
        goodsImgUrl: '/img/goods.png',
        goodsTitle: '推荐商品2',
        goodsPrice: '999',
      },
      {
        goodsId: '3',
        goodsImgUrl: '/img/goods.png',
        goodsTitle: '推荐商品3',
        goodsPrice: '999',
      },
      {
        goodsId: '4',
        goodsImgUrl: '/img/goods.png',
        goodsTitle: '推荐商品4',
        goodsPrice: '999',
      },
      {
        goodsId: '5',
        goodsImgUrl: '/img/goods.png',
        goodsTitle: '推荐商品5',
        goodsPrice: '999',
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
  },

  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  addCart: function (event) {
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/home/addCart',
      data: {
        goodsId: event.currentTarget.dataset.goodsid,
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res.statusCode == 200) {
          wx.showToast({
            title: '已加入购物车',
            duration: 500
          })
        }

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })

  },

  getRecommendList: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/home/getRecommendList',
      data: {},
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ recommendList: res.data });
        }

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })
  },

  getBannerImage: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/home/getBannerImage',
      data: {},
      method: 'GET',
      header: { 'Content-Type': 'application/json' },

      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ imgUrls: res.data });
        }
        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })
  },

  onLoad: function () {
    this.getBannerImage();
    this.getRecommendList();
  },
})
