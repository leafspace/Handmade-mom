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
    baseUrl: "",
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

  addCart(data) {
    wx.request({
      url: 'http://localhost:80/HandMadeMon/home/addCart',
      data: {
        goodsId: item.goodsId,
        goodsNum: 1,
        goodsSpec: '',
        goodsTitle: item.goodsTitle,
        goodsImgUrl: item.goodsImgUrl,
        goodsPrice: item.price
      },
      method: 'POST',
      success: function (res) {
        wx.showToast({
          title: '已加入购物车',
          icon: 'success',
          duration: 500
        })

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },

      complete: function (res) {
        console.log(res.data);
      }

    })

  },

  getRecommendList: function () {
    var that = this
    wx.request({
      url: 'http://localhost:80/HandMadeMom/home/getRecommendList',
      data: {},
      method: 'GET',
      success: function (res) {
        if (res.code == 200)
          if (res.data.recommendList.length > 0) {
            let list = this.data.recommendList
            for (let i = 0; i < res.data.list.length; i++) {
              list.push(res.data.recommendList[i])
            }
            that.setData({
              recommendList: list,
            });
          }

        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },

      complete: function (res) {
        console.log(res.data);
      }

    })
  },

  getBannerImage: function () {
    wx.request({
      url: 'http://localhost:80/HandMadeMom/home/getBannerImage',
      data: {},
      method: 'GET',
      success: function (res) {
        this.setData({ imgUrls: res.data });
        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },

      complete: function (res) {
        console.log(res.data);
      }
    })
  },

  onLoad: function () {
    this.getBannerImage();
    this.getRecommendList();
  },
})
