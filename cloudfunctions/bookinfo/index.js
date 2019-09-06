// 云函数入口文件
 const cloud = require('wx-server-sdk')

 cloud.init()

var rq = require("request-promise")

// 云函数入口函数
exports.main =  (event, context) => {
  var res = rq("http://isbn.szmesoft.com/isbn/query?isbn="+event.isbn).then(html =>{
   
    return html;
  }).catch(err => {
    console.log(err)
  })
  return res
}
