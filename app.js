<<<<<<< HEAD
<<<<<<< HEAD
//app.js
import myconfig from 'config'
import user from 'utils/user'
App({
=======
//app.js
import myconfig from 'config'
import unitfunction from 'utils/bookoperation'
App({
// 获取用户全部信息并放在globalData里
fetchAllUser(){
  unitfunction.getList(this.globalData.PerInfoId, (res) => {
    this.globalData.allUserList = res.data.objects
    console.log(this.globalData)
  })
},
>>>>>>> 修改login,globaldata
  onLaunch: function () { 
    let that = this
    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
<<<<<<< HEAD
    // 登陆并获取当前用户信息存储到globaldata里
    wx.BaaS.login(false).then(res => {
      user.getPerInfos(wx.BaaS.storage.get('uid'), (res) => {
        this.globalData.nowUserInfos = res.data.objects
      })
    })  
=======
    // 登陆
    wx.BaaS.login(false).then(res => {
    })
    this.fetchAllUser()
>>>>>>> 修改login,globaldata
  },
  globalData: { 
    clientId: myconfig.myconfig.clientId,
    PerInfoId: myconfig.myconfig.PerInfoId,
    tableId: myconfig.myconfig.tableId,
<<<<<<< HEAD
    nowUserInfos: [],
  },
 
=======
//app.js
import myconfig from 'config'
App({
  onLaunch: function () {
    
    let that = this
    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
  },
  globalData: { 
    clientId: myconfig.myconfig.clientId,
    PerInfoId: myconfig.myconfig.PerInfoId,
    tableId: myconfig.myconfig.tableId,
    allUserList: [],
  }
>>>>>>> lihuan
=======
    allUserList: [],
  },
 
>>>>>>> 修改login,globaldata
})