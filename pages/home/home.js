// pages/home/home.js
var utils = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:1,
    imgUrls: [
      'https://wx2.sinaimg.cn/mw690/006PiDc1gy1fsedfcb3c2j34yp20gqv6.jpg',
      'https://wx1.sinaimg.cn/mw690/006PiDc1ly1fs9ab5hi4ej31xg1ab7wi.jpg',
      'https://wx3.sinaimg.cn/mw690/006PiDc1ly1fs9ab6jtf5j31xg1abhdu.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    previousMargin: "50rpx",
    nextMargin: "50rpx",
    beforeColor: "rgba(255,255,255,0.3)",
    activeColor:"rgba(255,255,255,0.7)",
    circular: true
  },
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current   //获取当前轮播图片的下标
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const baseUrl = app.globalData.doubanBaseUrl;
    const fuyaourl = baseUrl+  '/v2/movie/subject/26640097';
    const hqurl = baseUrl + '/v2/movie/subject/26761328';
    utils.http(fuyaourl, 'fydata', this.formatTvData);
    utils.http(hqurl, 'hqdata', this.formatTvData);
  },

  getTvData: function(url,dataName){
    utils.http(url,dataName,this.formatTvData);
  },

  formatTvData: function (data, dataName) {
    const tvData = {};
    tvData[dataName] = utils.formatTvs(data);
    tvData[dataName].stars = utils.formatStars(tvData[dataName].stars);
    this.setData(tvData);
    wx.setStorageSync(dataName, tvData[dataName]);
  },

  getMore: function(event) {
    const tourl = event.target.dataset.more;
    wx.switchTab({
      url: '../'+tourl+'/'+tourl,
    })
  },

  ontvtap: function (event) {
    var tvid = event.currentTarget.dataset.tvid;
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: "/pages/tvs/tvdetail/tvdetail?id="+tvid+"&title="+title,
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
  
  }
})