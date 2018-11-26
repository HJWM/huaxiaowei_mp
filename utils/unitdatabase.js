// 获取全部信息列表
let getList = (ctx, cb) => {
  let tableId = ctx,
    Books = new wx.BaaS.TableObject(tableId)
  Books.find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}
// 获取某一类信息列表
let getSomeClass = (ctx, catename,catevalue,cb) => {
    let tableId = ctx,
    NewInfo = new wx.BaaS.TableObject(tableId),
    query = new wx.BaaS.Query()
    query.compare( catename, '=', catevalue)
    NewInfo.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}
//获取某类型（比如热门图书）排序后前n项
let getRankn = (ctx,citename,num,cb) => {
  let tableId = ctx
  // let name = citename
  let booknum =num,
  NewInfo = new wx.BaaS.TableObject(tableId)
  NewInfo.orderBy(citename).limit(booknum).offset(0).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// 更新某本书借阅量
let updateCount = (ctx,recordId,beforeCount,cb) => {
  let tableId = ctx
  let NewInfo  = new wx.BaaS.TableObject(tableId)
  let user = NewInfo.getWithoutData(recordId)

  let data = {
    bookBorrowCount: beforeCount+1,
  }

  user.set(data)
    .update()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

module.exports = {
  getList,
  getSomeClass,
  getRankn,
  updateCount

}