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
    console.log("options", options)
    const tvid = options.id;
    const title = options.title;
    this.setData({
      tvTitle: title
    });
    const baseUrl = app.globalData.doubanBaseUrl;
    const requrl = baseUrl + '/v2/movie/subject/'+tvid;
    utils.http(requrl, 'movie', this.formatTvData);
  },

  formatTvData: function(data, name){
      if (!data) {
        return;
      }
      var director = {
        avatar: "",
        name: "",
        id: ""
      }
      if (data.directors[0] != null) {
        if (data.directors[0].avatars != null) {
          director.avatar = data.directors[0].avatars.large

        }
        director.name = data.directors[0].name;
        director.id = data.directors[0].id;
      }
      var tv = {
        tvImg: data.images ? data.images.large : "",
        country: data.countries[0],
        title: data.title,
        originalTitle: data.original_title,
        wishCount: data.wish_count,
        commentCount: data.comments_count,
        year: data.year,
        generes: data.genres.join("、"),
        stars: utils.formatStars(data.rating.stars),
        score: data.rating.average,
        director: director,
        casts: utils.convertToCastString(data.casts),
        castsInfo: utils.convertToCastInfos(data.casts),
        summary: data.summary
      }
      const obj = {};
      obj[name] =tv;
      console.log('obj',obj)
      this.setData(obj);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready-data",this.data.tvData)
    wx.setNavigationBarTitle({
      title: this.data.tvTitle
    })
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