//app.js
import myconfig from 'config'
import user from 'utils/user'
App({
  onLaunch: function () { 
    let that = this
    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
    // 登陆并获取当前用户信息存储到globaldata里
    wx.BaaS.login(false).then(res => {
      user.getPerInfos(wx.BaaS.storage.get('uid'), (res) => {
        this.globalData.nowUserInfos = res.data.objects
      })
    })  
  },
  globalData: { 
    clientId: myconfig.myconfig.clientId,
    PerInfoId: myconfig.myconfig.PerInfoId,
    tableId: myconfig.myconfig.tableId,
    nowUserInfos: [],
  },
 
})