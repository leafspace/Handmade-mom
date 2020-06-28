//app.js
/**
 * tabBar页面路径列表 (用于链接跳转时判断)
 * tabBarLinks为常量, 无需修改
 */
const tabBarLinks = [
  "pages/index/index",
  "pages/mall/mall",
  "pages/mine/mine"
];

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  /**
   * 获取tabBar页面路径列表
   */
  getTabBarLinks() {
    return tabBarLinks;
  },

  /**
   * 跳转到指定页面
   * 支持tabBar页面
   */
  navigationTo(url) {
    if (!url || url.length == 0) {
      wx.showToast({
        title: '即将开放，敬请期待',
        icon: "none"
      })
    }
    let tabBarLinks = this.getTabBarLinks();
    // tabBar页面
    if (tabBarLinks.indexOf(url) > -1) {
      wx.switchTab({
        url: '/' + url
      });
    } else {
      // 普通页面
      wx.navigateTo({
        url: '/' + url
      });
    }
  },
})