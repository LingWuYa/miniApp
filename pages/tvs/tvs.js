// pages/tvs/tvs.js
const database = require("../../data/data.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMusicId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var musicList = database.musicList;
    this.setData({
      musicList: musicList,
      musicPlayStatus: app.globalData.g_isPlayingMusic
    })
    this.setMusicMonitor();
    const fydata = wx.getStorageSync("fydata");
    const hqdata = wx.getStorageSync("hqdata");
    this.setData({
      fydata: fydata,
      hqdata: hqdata
    })
  },
  ontvtap: function(event){
    var tvid = event.currentTarget.dataset.tvid;
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: "tvdetail/tvdetail?id="+tvid + "&title=" + title,
    })
  },

  setMusicMonitor: function() {
    var that = this;
    wx.onBackgroundAudioPlay(function(event){
      console.log("onplay")
      app.globalData.g_isPlayingMusic = true;
      that.setData({
        musicPlayStatus: app.globalData.g_isPlayingMusic,
      })
    })

    wx.onBackgroundAudioPause(function(e) {
      console.log("onpause")
      app.globalData.g_isPlayingMusic = false;
      that.setData({
        musicPlayStatus: app.globalData.g_isPlayingMusic ,
        // currentMusicId: ''
      });
    })

    wx.onBackgroundAudioStop(function(e){
      console.log("onstop")
      app.globalData.g_isPlayingMusic = false;
      that.setData({
        musicPlayStatus: !that.data.musicPlayStatus,
        currentMusicId: ''
      });
    })
  },
  playMusic: function(e) {
    // console.log('e',e);
    var musicId = e.currentTarget.dataset.musicid;
    if (this.data.currentMusicId === musicId) {
      app.globalData.g_isPlayingMusic = false;
      this.setData({
        musicPlayStatus: !this.data.musicPlayStatus,
        currentMusicId:''
      });
      wx.pauseBackgroundAudio();
    }else {
      app.globalData.g_isPlayingMusic = true;
      console.log('musicId', musicId)
      this.setData({
        musicPlayStatus: app.globalData.g_isPlayingMusic,
        currentMusicId: musicId
      })
      // const that = this;
      // console.log('url', this.data.musicList[musicId].url)
      wx.playBackgroundAudio({
        dataUrl: this.data.musicList[musicId].url,
        title: this.data.musicList[musicId].title,
        coverImgUrl: this.data.musicList[musicId].coverImg,
      })
    }
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