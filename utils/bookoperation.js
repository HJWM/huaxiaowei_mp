// 获取书列表
let getList = (ctx, cb) => {
  let tableId = ctx,
    Books = new wx.BaaS.TableObject(tableId)
  Books.find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// 获取单本书的信息
let getBook = (ctx, cb) => {
  let tableId = getApp().globalData.tableId
  let Books = new wx.BaaS.TableObject(tableId)
  let myRecord = ctx.data.curRecordId.trim()
  Books.get(myRecord).then(res => cb(res))
    .catch(err => console.dir(err))
}


module.exports = {
  getList,
  getBook
}
