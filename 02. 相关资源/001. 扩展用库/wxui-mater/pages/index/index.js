//index.js
//获取应用实例
const app = getApp()
var moment = require('moment');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[
      {
        id: 'component_demo',
        name: '组件',
        page: '/pages/component_demo/component_demo'
      },
      {
        id: 'loading',
        name: 'loading',
        page: '/pages/loading/loading'
      },
      {
        id: 'search',
        name: '搜索',
        page: '/pages/search-wrap/search/search'
      },
      {
        id: 'swiper',
        name: '轮播图',
        page: '/pages/swiper/swiper'
      },
      {
        id: 'menu',
        name: '菜单',
        page: '/pages/menu/menu'
      },
      {
        id: 'menu',
        name: '公告',
        page: '/pages/notice/notice'
      },
      {
        id: 'scroll',
        name: 'scroll-view',
        page: '/pages/scroll/scroll'
      },
      {
        id: 'popup',
        name: '弹窗',
        page: '/pages/popup/popup'
      },
      {
        id: 'tab',
        name: 'tab',
        page: '/pages/tab/tab'
      },
      {
        id: 'share',
        name: '分享',
        page: '/pages/share/share'
      },
      {
        id: 'goods',
        name: '商品',
        page: '/pages/goods/goods'
      },
      {
        id: 'order',
        name: '订单',
        page: '/pages/order/order'
      },
      {
        id: 'audio',
        name: '音频',
        page: '/pages/audio/audio'
      },
      {
        id: 'canvas',
        name: '画布',
        page: '/pages/canvas2/canvas2'
      },
      {
        id: 'location',
        name: '地理位置',
        page: '/pages/location/location'
      },
      {
        id: 'moment',
        name: 'moment',
        page: '/pages/moment_info/moment_info'
      },
      {
        id: 'count_down',
        name: '倒计时',
        page: '/pages/count_down/count_down'
      },
      {
        id: 'rich_text',
        name: '富文本',
        page: '/pages/rich_text/rich_text'
      },
      {
        id: 'message',
        name: '订阅消息',
        page: '/pages/message/message'
      },
      {
        id: 'address',
        name: '授权地址/获取地理位置名称',
        page: '/pages/authorize_address/authorize_address'
      },
      {
        id: 'phone',
        name: '授权手机号',
        page: '/pages/phone/phone'
      },
      {
        id: 'animate',
        name: '动画',
        page: '/pages/animate/animate'
      }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log('call', res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var animationNew = wx.createAnimation({
      duration: 5000,
      timingFunction: 'ease',
      delay: 1000
    });
    animationNew.translate(0, -4047).step()
    this.setData({
      animation: animationNew
    })
  },
  getUserInfo: function(e) {
    wx.setStorageSync('userInfo', e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
