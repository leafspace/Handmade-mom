// pages/details/index.js
const app = getApp()

Page({
  data: {
    goodsImgUrls: [
      {
        targetUrl: '',
        imgUrl: '/img/20200702164950.jpg'
      },
      {
        targetUrl: '',
        imgUrl: '/img/20200702165015.jpg'
      },
      {
        targetUrl: '',
        imgUrl: '/img/20200702165026.jpg'
      }
    ],

    goodsId: 0,

    goodsInfo: {
      goodsTitle: '商品名ABCDEF',
      goodsSpec: 'good',
      goodsFreightPrice: 8,
      goodsRemainNum: 3224,
      goodsPrice: 999,
      goodsDetailsText: '我是产品详情',
      goodsDetailsVedioUrls: [],
      goodsTotorialText: '我是制作教程',
      goodsTotorialVedioUrls: [],
    },

    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    previousMargin: 0,
    nextMargin: 0,

    state: 1,  //1是产品详情，2是制作教程
    tabIs: true,
  },

  tabFun: function (event) {
    if (event.currentTarget.dataset.state == 1) {
      this.setData({
        tabIs: true
      })
    } else {
      this.setData({
        tabIs: false
      })
    }

    console.log(event);
  },

  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/index"
    });
  },

  addCart: function () {
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/home/addCart',
      data: {
        goodsId: this.data.goodsId,
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

  doCreateOrder: function () {
    wx.navigateTo({
      url: "/pages/orderDetails/index"
    });
  },

  onLoad: function (options) {
    var that = this

    that.setData({
      goodsId: options.goodsId,
    })

    wx.request({
      url: 'http://localhost:8080/HandMadeMom/details/getGoodsInfo',
      data: {
        goodsId: this.data.goodsId,
      },
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ goodsInfo: res.data });
        }

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })


    wx.request({
      url: 'http://localhost:8080/HandMadeMom/details/getGoodsInfoImage',
      data: {
        goodsId: this.data.goodsId,
      },
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ goodsImgUrls: res.data });
        }

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })
  }
})