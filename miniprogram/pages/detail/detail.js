// pages/detail/detail.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    book:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var _this = this;
    db.collection('bookinfo').doc(options.id).get({
      success: res => {
        _this.setData({
           book: res.data
         })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  update:function(event){
    
    db.collection("bookinfo").doc(this.data.book._id).update({
      data:{
        BookName:"局部更新测试2"
      },
      success:function(res){
        console.log(res)
      }
    })
  },
  delete: function (event) {
    db.collection("bookinfo").doc(this.data.book._id).remove({
      success: function (res) {
        console.log("delete success:"+res.data)
      }
    })

  },
})