// pages/scanCode/scanCode.js



Page({
  data: {
  },
  onLoad: function (options) {
  },
  scanCode:function(event){
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        //ISBN码
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'bookinfo',
          // 传递给云函数的参数
          data: {
            //isbn: res.result
            isbn: 9787020002207
          },
          success: res => {
            var bookString = res.result
            console.log(JSON.parse(bookString) )
            const db = wx.cloud.database()
            const bookinfo = db.collection("bookinfo")
            bookinfo.add({
              data: JSON.parse(bookString)
            }).then(res => {
                console.log(res)
              }).catch(console.error)
          }
        })
      },
      fail:err => {
        console.log(err);
      }
      
    })
  }
})