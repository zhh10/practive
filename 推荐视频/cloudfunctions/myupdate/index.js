// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection("students").where({})
  .update({
    data:{
      name:event.name
    },
    success(res){
      console.log(res)
    },
    fail(res){
      console.log(res)
    }
  })
  
}