// pages/files/files.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankerList: [
      { id: 0, text: '大小' }, 
      { id: 1, text: '时间' },
      { id: 2, text: '下载量' },
      { id: 3, text: '收藏人数' },
    ],
    rankerSelected: 0,
    fileList: [
      { id: 0, title: '人间失格', lable: '小说', shareTime: '2019-08-26', added: false },
      { id: 1, title: '斜阳', lable: '小说', shareTime: '2019-08-26', added: true },
      { id: 2, title: '人间失格', lable: '小说', shareTime: '2019-08-26', added: false },
      { id: 3, title: '斜阳', lable: '小说', shareTime: '2019-08-26', added: true },
      { id: 4, title: '人间失格', lable: '小说', shareTime: '2019-08-26', added: false },
      { id: 5, title: '斜阳', lable: '小说', shareTime: '2019-08-26', added: true },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setData({
      rankerSelected: 0,
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

  onSelectRanker: function(e) {
    console.log(e)
    this.setData({ rankerSelected: e.currentTarget.dataset.id })
  }
})