// pages/home/home.js
var util = require('../../utils/util.js');
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
    const fuyaourl = 'https://douban.uieee.com/v2/movie/subject/26640097';
    const hqurl = 'https://douban.uieee.com/v2/movie/subject/26761328';
    this.getTvData(fuyaourl,'fydata');
    this.getTvData(hqurl, 'hqdata');
  },

  getTvData: function(url,dataName){
    const that = this;
    wx.request({
      url: url,
      data: '',
      header: { 'content-type': 'json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.statusCode == 200) {
          const tvData = {};
          tvData[dataName] = util.formatTvs(res.data);
          tvData[dataName].stars = util.formatStars(tvData[dataName].stars);
          that.setData(tvData);
          wx.setStorageSync(dataName, tvData[dataName]);
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  getMore: function(event) {
    const tourl = event.target.dataset.more;
    console.log(tourl)
    wx.switchTab({
      url: '../'+tourl+'/'+tourl,
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