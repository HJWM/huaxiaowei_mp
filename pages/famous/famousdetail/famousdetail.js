var app = getApp()
import unitdatabase from '../../../utils/unitdatabase'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eachFamousInfo:'',//传过来的Fid
    eachFamousAllInfo:[]//名人的具体信息
  },
  // 获取某一个名人的具体信息
  fetchSomePerson() {
    unitdatabase.getSomeClass(getApp().globalData.famousId,'Fid', this.data.eachFamousInfo, (res) => {
      this.setData({
        eachFamousAllInfo: res.data.objects
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       eachFamousInfo: options.id//某个名人的Fid
     })
    this.fetchSomePerson()
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