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
  onLaunch: function () { 
    let that = this
    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
    // 登陆
    wx.BaaS.login(false).then(res => {
    })
    this.fetchAllUser()
  },
  globalData: { 
    clientId: myconfig.myconfig.clientId,
    PerInfoId: myconfig.myconfig.PerInfoId,
    tableId: myconfig.myconfig.tableId,
    allUserList: [],
  },
 
})