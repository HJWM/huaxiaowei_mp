// pages/my/my.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'hasWeInfo': false
  },

// 点击绑定微信号将头像等信息存入缓存
  userInfoHandler(data) {
    wx.BaaS.handleUserInfo(data).then(res => {
      var personWeInfo = res
      wx.setStorage({
        key: 'personWeInfo',
        data: personWeInfo,
        success: function (res) {
        }
      })
      this.setData({
        'hasWeInfo': true,
        'personPortrait': res.avatarUrl,
        'personNick': res.nickName
      })
    })
  },
  // 获取缓存，是否用户已经授权
  getPersonWeInfo: function () {
    var value = wx.getStorageSync('personWeInfo')
    if (!(value === '')) {
      this.setData({
        'hasWeInfo': true,
        'personPortrait': value.avatarUrl,
        'personNick': value.nickName
      })
    }
  },
// 编辑资料跳转到个人资料页面
  editPerInfo: function () {
    wx.navigateTo({
      url: 'user/user',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPersonWeInfo()
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
  
  }

})