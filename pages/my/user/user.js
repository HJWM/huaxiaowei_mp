// pages/my/user/user.js
import user from '../../../utils/user'
<<<<<<< HEAD
var app = getApp()

function checkPhone (str) {
 var re = /^1\d{10}$/
 return re.test(str)
}

function checkPerInfoValid (phone, name) {
  let invalidMsg = '',
      validFlag = true;

  // 仅当填写了phone时检查其是否合法
  if (phone !== undefined && phone !== "" && !checkPhone(phone)) {
    invalidMsg = '请输入正确的手机号';
    validFlag = false;
  }

  // 仅当传入name时检查name
  if (arguments.length === 2 && (name === undefined || name === '')) {
    invalidMsg = '请输入姓名';
    validFlag = false;
  }

  if (!validFlag) {
    wx.showToast({
      title: invalidMsg,
      icon: "none"
    })
    setTimeout(() => {
      wx.hideToast();
    }, 1500);
  }

  return validFlag;
}

=======
>>>>>>> lihuan
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexes: ["男", "女", "保密"],
    sexIndex: '0',

    classes: ["2016级", "2017级", "2018级", "2019级"],
<<<<<<< HEAD
    classIndex: '2',

    departs: ["主席团", "无线通信一组", "无线通信二组", "固定带宽组", "云计算与海量数据组", "网络媒体组", "新媒体中心", "秘书处"],
=======
    classIndex: '0',

    departs: ["无线通信一组", "无线通信二组", "固定带宽组", "云计算与海量数据组", "网络媒体组", "新媒体中心", "秘书处"],
>>>>>>> lihuan
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
<<<<<<< HEAD
=======
    console.log(e.detail.value)
>>>>>>> lihuan
    this.setData({
      'sexIndex': e.detail.value + '',
    })

  },
  //  获取用户年级
  bindClassChange: function (e) {
<<<<<<< HEAD
    this.setData({
      'classIndex': e.detail.value + '',
    })
=======
    console.log(e.detail.value)
    this.setData({
      'classIndex': e.detail.value + '',
    })
    console.log(this.data.classes[this.data.classIndex])
>>>>>>> lihuan
  },

  //  获取用户部门
  bindDepartChange: function (e) {
<<<<<<< HEAD
=======
    console.log(e.detail.value)
>>>>>>> lihuan
    this.setData({
      'departIndex': e.detail.value + '',
    })

  },
  //  获取用户全部信息
  fetchPerInfo() {
    user.getPerInfos(wx.BaaS.storage.get('uid'), (res) => {
      this.setData({
        'allPerInfos': res.data.objects,
<<<<<<< HEAD
      })
      app.globalData.nowUserInfos = res.data.objects
=======
      }),
      console.log(wx.BaaS.storage.get('uid'))
      console.log(res.data.objects)
>>>>>>> lihuan
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
<<<<<<< HEAD
      if (!checkPerInfoValid(this.data.perNumber, this.data.perName)) return; // 数据校验不合法则弹窗提示并停止提交
=======
>>>>>>> lihuan
      user.addPerInfo(this, (res) => {//不存在用户信息时，添加
        this.setData({
          allPerInfos: res.data,
          isEditing: false
        })
        this.fetchPerInfo()
<<<<<<< HEAD
        wx.showToast({
          icon: 'success',
          title: '资料信息已更新'
        })
        setTimeout(() => {
          wx.hideToast();
        }, 1500);
=======
>>>>>>> lihuan
      })
    } else {
      this.setData({
        isEditing: false,
      })
<<<<<<< HEAD
      if (!checkPerInfoValid(this.data.perNumber)) return; // 数据校验不合法则弹窗提示并停止提交
      user.updatePerInfo(this, (res) => {//存在用户信息时，更新
        this.fetchPerInfo()
        wx.showToast({
          icon: 'success',
          title: '资料信息已更新'
        })
        setTimeout(() => {
          wx.hideToast();
        }, 1500);
=======
      user.updatePerInfo(this, (res) => {//存在用户信息时，更新
        this.fetchPerInfo()
>>>>>>> lihuan
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