// pages/bookmange/bookmange.js
var app = getApp()
import unitfunction from '../../utils/bookoperation'
Page({
  data: {
    bookList: [],//书列表
    curRecordDate: []//当前书的具体信息
  },
  //  获取书列表 
  fetchBookList() {
    unitfunction.getList(getApp().globalData.tableId, (res) => {
      this.setData({
        bookList: res.data.objects
      })
    })
  },
  // 获取单本书信息
  getSingleDetail(e) {
    this.setData({
      curRecordId: e.target.dataset.bookId,
      // 获取当前操作的书的id,数据库的对应行
    })
    unitfunction.getBook(this, (res) => {
      this.setData({
        curRecordDate: res.data
      })

    })

  },

// 获取所有用户消息并放在了globaldata里
  fetchAllUser() {
    unitfunction.getList(app.globalData.PerInfoId, (res) => {
      app.globalData.allUserList = res.data.objects
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchBookList()
    // 从globalData获取当前用户信息
    this.fetchAllUser()
    console.log(app.globalData)
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