// components/banner/banner.js
Component({
  /**
   * 组件的属性列表(用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容数据)
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    banner: {
      type: Array
    },
    customValue: {
      type: String
    },
    current: {
      type: Number
    }
  },

  /**
   * 组件的初始数据(组件内部数据)
   */
  data: {
    internalValue:"这是组件内部数据"
  },

  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持 (默认情况下，一个组件的wxml中只能有一个slot。)
    styleIsolation: 'apply-shared'  //isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）
                                    //apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
                                    //shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
  },

  /**
   * 生命周期函数，可以为函数，或一个在methods段中定义的方法名
   */
  lifetimes: {
    created: function () { },   //在组件实例刚刚被创建时执行
    attached: function () { console.log(this.data.customValue)},  //获取父组件值  // 在组件实例进入页面节点树时执行
    ready: function () { },  // 在组件在视图层布局完成后执行
    moved: function () { },  // 在组件实例被移动到节点树另一个位置时执行
    detached: function () { },  // 在组件实例被从页面节点树移除时执行
    error: function () { },  // 每当组件方法抛出错误时执行
  },

  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },   //组件所在的页面被展示时执行
    hide: function () { },   //组件所在的页面被隐藏时执行
    resize: function () { }, //组件所在的页面尺寸变化时执行
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 内部方法建议以下划线开头
    _swiperChange: function(e){
      // 子组件传值父组件接收
      let myEventDetail = {current: e.detail.current, text2:'第二个参数'}
      this.triggerEvent('swiperHandle', myEventDetail)
    },

    _toPath(e){
      App.navigationTo(e.currentTarget.dataset.path)
    },

    _childRun(){
      this.setData({
        msg:'父组件打印子组件data数据内容'
      })
      wx.showToast({
        title: '父组件打印子组件内容',
        icon: 'none'
      })
    },
  }
})
