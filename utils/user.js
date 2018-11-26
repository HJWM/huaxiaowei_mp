<<<<<<< HEAD

// 获取用户信息
let getPerInfos = (uid, cb) => {
  let tableId = getApp().globalData.PerInfoId,
    PerInfo = new wx.BaaS.TableObject(tableId),
    query = new wx.BaaS.Query()
   query.compare('created_by', '=', uid)
   PerInfo.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// 添加用户信息
let addPerInfo = (ctx, cb) => {
  let tableId = getApp().globalData.PerInfoId,
    PerInfo = new wx.BaaS.TableObject(tableId),
    user = PerInfo.create(),
    PerAllInfo = ctx.data.allPerInfos

  let data = {
    perName: ctx.data.perName,
    sexIndex: ctx.data.sexIndex,
    classIndex: ctx.data.classIndex,
    departIndex: ctx.data.departIndex,
    perNumber: ctx.data.perNumber,
    perUid: wx.BaaS.storage.get("uid")
  }

  user.set(data)
    .save()
    .then(res => cb(res))
    .catch(err => console.dir(err))

}
// 更新用户信息
let updatePerInfo = (ctx, cb) => {
  let tableId = getApp().globalData.PerInfoId
  let PerInfo = new wx.BaaS.TableObject(tableId)
  let recordID = ctx.data.allPerInfos[0].id
  let user = PerInfo.getWithoutData(recordID)


  let data = {
    sexIndex: ctx.data.sexIndex,
    perNumber: ctx.data.perNumber
  }

  user.set(data)
    .update()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}


module.exports = {
  getPerInfos,
  addPerInfo,
  updatePerInfo,
=======
// 获取用户信息
let getPerInfos = (uid, cb) => {
  let tableId = getApp().globalData.PerInfoId,
    PerInfo = new wx.BaaS.TableObject(tableId),
    query = new wx.BaaS.Query()
  query.compare('created_by', '=', uid)
  PerInfo.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// 添加用户信息
let addPerInfo = (ctx, cb) => {
  let tableId = getApp().globalData.PerInfoId,
    PerInfo = new wx.BaaS.TableObject(tableId),
    user = PerInfo.create(),
    PerAllInfo = ctx.data.allPerInfos
  console.log(PerAllInfo)

  let data = {
    perName: ctx.data.perName,
    sexIndex: ctx.data.sexIndex,
    classIndex: ctx.data.classIndex,
    departIndex: ctx.data.departIndex,
    perNumber: ctx.data.perNumber,
    perUid: wx.BaaS.storage.get("uid")
  }

  user.set(data)
    .save()
    .then(res => cb(res))
    .catch(err => console.dir(err))

}
// 更新用户信息
let updatePerInfo = (ctx, cb) => {
  let tableId = getApp().globalData.PerInfoId
  let PerInfo = new wx.BaaS.TableObject(tableId)
  let recordID = ctx.data.allPerInfos[0].id
  let user = PerInfo.getWithoutData(recordID)


  let data = {
    sexIndex: ctx.data.sexIndex,
    perNumber: ctx.data.perNumber
  }

  user.set(data)
    .update()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}


module.exports = {
  getPerInfos,
  addPerInfo,
  updatePerInfo
>>>>>>> lihuan
}