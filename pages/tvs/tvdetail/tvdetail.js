// pages/tvdetail/tvdetail.js
const utils = require("../../../utils/util.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tvid = options.id;
    const baseUrl = app.globalData.doubanBaseUrl;
    const requrl = baseUrl + '/v2/movie/subject/'+tvid;
    utils.http(requrl, 'tvData', this.formatTvData);
  },

  formatTvData: function(data){
    console.log(data);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.setNavigationBarTitle({
    //   title: '',
    // })
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
  
  }
})