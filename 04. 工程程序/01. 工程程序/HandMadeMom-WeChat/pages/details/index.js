// pages/details/index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
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
    goodsInfo: {
      title: '商品名ABCDEF',
      spec: 'good',
      goodsFreightPrice: 8,
      goodsRemainNum: 3224,
      price: 999,
      state: 1,
      goodsDetailsText: '我是产品详情',
      goodsDetailsImgUrls: [],
      goodsTotorialText: '我是制作教程',
      goodsTotorialImgUrls: [],
    },

    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    previousMargin: 0,
    nextMargin: 0,

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

    console.log(e);
  },

  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/index"
    });
  },

  addCart: function (event) {
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/home/addCart',
      data: {
        goodsId: goodsInfo.goodsId,
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
    app.http('v1/home/getItem', { id: options.id })
      .then(res => {
        this.setData({
          data: res.data
        })
      })
  },
})