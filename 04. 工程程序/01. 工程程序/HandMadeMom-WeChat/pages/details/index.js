// pages/details/index.js
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
    goodsInfo: {
      title: '商品名ABCDEF',
      spec: 'good',
      freightPrice: 8,
      remainNum:3224,
      price: 999,
      state: 1
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
    specIs: false,
  },

  tabFun(e) {
    console.log(e)
    if (e.currentTarget.dataset.state == 1) {
      this.setData({
        tabIs: true
      })
    } else {
      this.setData({
        tabIs: false
      })
    }
  },

  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/index"
    });
  },

  specFun() {
    this.setData({
      specIs: !this.data.specIs
    })
  },
  
  addCart() {
    app.http('v1/order/addCart', {
      id: this.data.data._id,
      num: 1,
      spec: ['asdasasd'],
      title: this.data.data.title,
      img: this.data.data.img,
      price: this.data.data.price
    }, "POST")
      .then(res => {
        console.log(res)
        if (res.code == 200) {
          wx.showToast({
            title: '已加入购物车',
            icon: 'success',
            duration: 2000
          })
        }
      })
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