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
})