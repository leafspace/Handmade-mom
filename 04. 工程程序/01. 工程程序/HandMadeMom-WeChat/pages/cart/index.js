const app = getApp()

Page({
  data: {
    isTotal: false, // 是否全选
    totalPrice: 0,  // 总价
    harvestAddress: '浙江省杭州市西湖大道', // 收获地址
    goodsList: [],
    isEdit: false
  },

  totalPrice: function() {//计算总价
    let that = this
    let price = 0
    for (let i = 0; i < that.data.goodsList.length; i++) {
      if (that.data.goodsList[i].goodsSelect) {
        price = price + that.data.goodsList[i].goodsPrice * that.data.goodsList[i].goodsBuyNum
      }
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })

  },

  totalFun() { //全选
    this.data.isTotal = !this.data.isTotal
    this.data.goodsList.map((v, k) => {
      if (this.data.isTotal) {
        v.goodsSelect = true
      } else {
        v.goodsSelect = false
      }
    })

    this.setData({
      goodsList: this.data.goodsList,
      isTotal: this.data.isTotal
    })

    this.totalPrice()
  },

  labelFun(e) {//单选
    let that = this
    let num = 0
    for (let i = 0; i < that.data.goodsList.length; i++) {
      if (that.data.goodsList[i].goodsId == e.currentTarget.dataset.goodsid) {
        that.data.goodsList[i].goodsSelect = !that.data.goodsList[i].goodsSelect
        that.setData({
          goodsList: that.data.goodsList
        })
      }

      if (that.data.goodsList[i].goodsSelect) {
        num++
      }
    }

    if (num == that.data.goodsList.length) {
      that.setData({
        isTotal: true
      })
    } else {
      that.setData({
        isTotal: false
      })
    }
    this.totalPrice()
  },

  editFun() { //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })

    if (!this.data.isEdit) {
      console.log(this.data.goodsList)
      app.http('v1/order/editCart', { goodsList: this.data.goodsList }, "POST")
        .then(res => {
          console.log(res)
        })
    }
  },

  plusFun(item) { //增加商品数量
    this.data.goodsList.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        this.data.goodsList[k].num++
      }
    })

    this.setData({
      goodsList: this.data.goodsList
    })

    this.totalPrice()
  },

  reduceFun(item) { //减少商品数量
    this.data.goodsList.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        if (this.data.goodsList[k].num > 1) {
          this.data.goodsList[k].num--
        }
      }
    })
    this.setData({
      goodsList: this.data.goodsList
    })

    this.totalPrice()
  },

  delItemFun(item) { //删除单商品

    let id = item.target ? item.target.dataset.item.id : item.id

    this.data.goodsList.map((v, k) => {
      if (v.id == id) {
        this.data.goodsList.splice(k, 1)
      }
    })

    this.setData({
      goodsList: this.data.goodsList
    })

    this.totalPrice()
  },

  delFun() { //选中删除
    let goodsList = []

    this.data.goodsList.map((v, k) => {
      if (!v.goodsSelect) {
        goodsList.push(v)
      }
    })

    this.setData({
      goodsList: goodsList
    })

    this.totalPrice()

  },
  
  closeFun: function () {
    let goodsList = []
    let listTotal = []
    this.data.goodsList.map((v, k) => {
      if (v.goodsSelect) {
        goodsList.push(v)
      } else {
        listTotal.push(v)
      }
    })
    app.http('v1/order/set', { goods: goodsList }, "POST").then(res => {
      if (res.code == 200) {
        app.http('v1/order/editCart', { goodsList: listTotal }, "POST")
          .then(res => {
            console.log(res)
          })
        wx.navigateTo({
          url: "/pages/orderDetails/index?id=" + res.data._id
        });
      }
    })

  },
  
  onShow: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/HandMadeMom/cart/getCartList',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ goodsList: res.data });
        }

        that.totalPrice()
        console.log(res.data);
      },

      fail: function (res) {
        console.log(res.data);
      },
    })


  },
})