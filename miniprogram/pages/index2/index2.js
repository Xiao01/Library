//index.js
const app = getApp()

Page({
  data: {
    book_list: []
  },
  onShow: function (option) {
    var _this = this;
    const db = wx.cloud.database()
    // db.collection('bookinfo').get({
    db.collection('bookinfo').limit(10).get({
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


