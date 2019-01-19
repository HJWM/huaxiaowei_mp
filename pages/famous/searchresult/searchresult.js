var app = getApp()
import unitdatabase from '../../../utils/unitdatabase'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     inputVal:'',//搜索框的结果
     famousresult:[],//搜索结果
    inputVal:''//搜索框内的显示值
  },
  // 根据输入内容选择匹配的名字
  inputTyping: function (e) {
    // 获取非技术达人信息
    this.setData({
      inputVal: e.detail.value
    })
    unitdatabase.getSomeClass(getApp().globalData.famousId, 'famousName', e.detail.value, (res) => {
      if (res.data.objects.length==0){
        this.setData({
          famousresult:[{famousName:'没有符合要求的结果'}]
        })
      }else{
        this.setData({
          famousresult: res.data.objects
        })
      }
      }) 
  },
  // 清除输入框与搜索结果
  clearInput: function () {
    this.setData({
      inputVal: '',
      famousresult: [],
    });
  },


  // 获取每本书的唯一标识
  getFid: function (event) {
    var nowFid = event.currentTarget.dataset.nowfid;
    wx.navigateTo({
      url: '../famousdetail/famousdetail?id=' + nowFid,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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