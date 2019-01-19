// pages/famous/famous.js
var app = getApp()
import unitdatabase from '../../utils/unitdatabase'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['../../public/img/famous/banner1.jpg', 
      '../../public/img/famous/banner2.jpg'
    ],

    tabs: [
      {"tabname":"全部",
       "src2":"../../public/img/famous/theall1.png",
       "src1": "../../public/img/famous/theall2.png"
      },
      {"tabname": "技术达人" ,
        "src2": "../../public/img/famous/tecperson1.png",
        "src1": "../../public/img/famous/tecperson2.png"
        },
      {"tabname": "非技术达人",
        "src2": "../../public/img/famous/notecperson1.png",
        "src1": "../../public/img/famous/notecperson2.png"
       },
      ],
    activeIndex: 0,
    allfaous:[],//所有名人
    tecperson:[],//技术达人
    notecperson: [],//非技术达人
  },
  // 获取所有名人信息
  fetchFamousList() {
    unitdatabase.getList(getApp().globalData.famousId,(res) => {
      this.setData({
        allfaous: res.data.objects
      })
    })
  },
  // 获取技术达人信息
  fetchTecPersons() {
    unitdatabase.getSomeClass(getApp().globalData.famousId, 'famousClass', '1', (res) => {
      this.setData({
        tecperson: res.data.objects
      })
    })
  },
  // 获取非技术达人信息
  fetchNotecPersons() {
    unitdatabase.getSomeClass(getApp().globalData.famousId, 'famousClass', '0', (res) => {
      this.setData({
        notecperson: res.data.objects
      })
    })
  },

  inputTyping: function () {
    wx.navigateTo({
      url: 'searchresult/searchresult',
    })
  },
// 获取每本书的唯一标识
  getFid:function(event){
    var nowFid = event.currentTarget.dataset.nowfid;
    wx.navigateTo({
      url: 'famousdetail/famousdetail?id=' + nowFid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchFamousList() 
    this.fetchTecPersons()
    this.fetchNotecPersons()
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });

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