// 使用了 async await 语法
const cloud = require('wx-server-sdk')
cloud.init({})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('bookinfo').where({
      _openid: "oK1SB4tF0GrSzxSZEKWCQTaY3DOw"
    }).update({
        data: {
          Price:"68.8元"
        },
      })
  } catch (e) {
    console.error(e)
  }
}


