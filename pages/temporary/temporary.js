
var app = getApp()
import unitdatabase from '../../utils/unitdatabase'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class1Books:[],//某个类别全部书
    class1Detail:[],//某个bookkId对应书的详细信息
    HotBook: [],//按借阅量排序
    LastestBook:[]//按最新排序
    
  },
 
  // 获取某类书的全部书信息
  getBooks() {
    unitdatabase.getSomeClass(getApp().globalData.tableId, 'bookType', '1', (res) => {
      this.setData({
        class1Books: res.data.objects
      })
     
    })
  },

  // 获取某bookId书的全部信息
  getBookDetail() {
    unitdatabase.getSomeClass(getApp().globalData.tableId, 'bookId', '1', (res) => {
      this.setData({
        class1Detail: res.data.objects
      })

    })
  },
  // 按借阅量返回书目前20项
  getHotBooks() {
    unitdatabase.getRankn(getApp().globalData.tableId,'-bookBorrowCount',20, (res) => {
      this.setData({
        HotBook: res.data.objects
      })

    })
  },
  // 按最新返回书目前20项
  getLastestBooks() {
    unitdatabase.getRankn(getApp().globalData.tableId, '-bookIssueDate', 2, (res) => {
      this.setData({
        LastestBook: res.data.objects
      })

    })
  },

  // 增加某一本书的借阅量
  addBookBorrowCount() {
    unitdatabase.getSomeClass(getApp().globalData.tableId, 'bookId', '1', (res) => {
      unitdatabase.updateCount(getApp().globalData.tableId, res.data.objects[0].id, res.data.objects[0].bookBorrowCount,  (res) => { 
        
      })
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getBooks()
    this.getBookDetail()
    this.getHotBooks()
    this.getLastestBooks()
    this.addBookBorrowCount() 
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