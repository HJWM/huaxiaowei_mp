// pages/my/user/user.js
import user from '../../../utils/user'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexes: ["男", "女", "保密"],
    sexIndex: '0',

    classes: ["2016级", "2017级", "2018级", "2019级"],
    classIndex: '0',

    departs: ["无线通信一组", "无线通信二组", "固定带宽组", "云计算与海量数据组", "网络媒体组", "新媒体中心", "秘书处"],
    departIndex: '0',

    allPerInfos: [],//用户全部信息

    isChecked: false//切换样式
  },

  //获取用户名字
  bindNameChange(e) {
    let value = e.detail.value
    this.setData({
      'perName': value
    })
  },

  //获取用户手机号码
  bindNumberChange(e) {
    let phonenumber = e.detail.value
    this.setData({
      'perNumber': phonenumber
    })
  },
  //  获取用户性别
  bindSexChange: function (e) {
    this.setData({
      'sexIndex': e.detail.value + '',
    })

  },
  //  获取用户年级
  bindClassChange: function (e) {
    this.setData({
      'classIndex': e.detail.value + '',
    })
  },

  //  获取用户部门
  bindDepartChange: function (e) {
    this.setData({
      'departIndex': e.detail.value + '',
    })

  },
  //  获取用户全部信息
  fetchPerInfo() {
    user.getPerInfos(wx.BaaS.storage.get('uid'), (res) => {
      this.setData({
        'allPerInfos': res.data.objects,
      })
      app.globalData.nowUserInfos = res.data.objects
      if (this.data.allPerInfos.length == 0) {
        this.setData({
          'isEditing': true,
          'isChecked': false
        })
      }
      else {
        this.setData({
          'isEditing': false,
          'isChecked': true,
          "sexIndex": res.data.objects[0].sexIndex
        })
      }

    })
  },



  // 保存按钮提交更新时间触发
  submitate: function (e) {
    if (this.data.allPerInfos.length == 0) {
      user.addPerInfo(this, (res) => {//不存在用户信息时，添加
        this.setData({
          allPerInfos: res.data,
          isEditing: false
        })
        this.fetchPerInfo()
      })
    } else {
      this.setData({
        isEditing: false,
      })
      user.updatePerInfo(this, (res) => {//存在用户信息时，更新
        this.fetchPerInfo()
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchPerInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})