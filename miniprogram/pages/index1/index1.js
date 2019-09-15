//index1.js
const app = getApp()

Page({
  data: {
    book_list: []
  },
  onLoad: function (option) {
    var _this = this;
    const db = wx.cloud.database()
    db.collection('douban3').get({
      success: res => {
        _this.setData({
          book_list: res.data
        })
        console.log(_this.data.book_list);
      }
    })
  },

  viewItem: function (event) {

    wx.navigateTo({
      url: '../../pages/detail/detail?id=' + event.currentTarget.dataset.id,
    })
  }
})


