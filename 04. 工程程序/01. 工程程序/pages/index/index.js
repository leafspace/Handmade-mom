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
        goodsTitleText: '推荐商品1',
        goodsPrice: '999',
      },
      {
        goodsId: '2',
        goodsImgUrl: '/img/goods.png',
        goodsTitleText: '推荐商品2',
        goodsPrice: '999',
      },
      {
        goodsId: '3',
        goodsImgUrl: '/img/goods.png',
        goodsTitleText: '推荐商品3',
        goodsPrice: '999',
      },
      {
        goodsId: '4',
        goodsImgUrl: '/img/goods.png',
        goodsTitleText: '推荐商品4',
        goodsPrice: '999',
      },
      {
        goodsId: '5',
        goodsImgUrl: '/img/goods.png',
        goodsTitleText: '推荐商品5',
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
    page:1
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
    let item = data.currentTarget.dataset.item
    app.http('v1/order/addCart', {
      id: item.goodsId,
      num: 1,
      spec: ['asdasasd'],
      title: item.title,
      img: item.img,
      price: item.price
    }, "POST")
      .then(res => {
        console.log(res)
        if (res.code == 200) {
          wx.showToast({
            title: '已加入购物车',
            icon: 'success',
            duration: 500
          })
        }
      })
  },


  imgsc: function (e) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://wx.yogalt.com/api/v1/admin/uploadBanner',      //此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'inputFile',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
          },
          formData: {
            href: 'www.baidu.com',           //跳转地址
            name: '大蛋糕',           //名称
            is_hide: true,       //是否显示
            effective: '2018-09-14,2019-09-14',       //有效期
          },
          success: function (res) {
            var data = res.data;
            console.log('data');
          },
          fail: function (res) {
            console.log('fail');

          },
        })
      }
    })
  },

  getHotList: function () {
    app.http('HandMadeMom/home/getRecommendList', { page: this.data.page })
      .then(res => {
        if (res.code == 200 && res.data.recommendList.length > 0) {
          this.data.page++
          let list = this.data.recommendList
          for (let i = 0; i < res.data.list.length; i++) {
            list.push(res.data.recommendList[i])
          }
          this.setData({
            recommendList: list,
            page: this.data.page
          })
          console.log(this.data)
        }
      })
  },

  getBannerImage: function () {
    let app = getApp()
    app.http('HandMadeMom/home/getBannerImage')
      .then(res => {
        this.setData({
          imgUrls: res.data
        })
        console.log(this.data)
      })
  },

  onLoad: function () {
    this.getBannerImage();
    this.getRecommendList()
  },
})
