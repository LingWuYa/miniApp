// pages/mine/mine.js
const app= getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isUserDataGet: app.globalData.userInfo.nickName?true:false,
    userInfo:{
      nickName: "昵称",
      avartarUrl: "/images/shop/others.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
    // wx.getUserInfo({
    //   withCredentials: false,
    //   lang:"zh_CN",
    //   timeout: 1000,
    //   success: function(res){
    //     console.log('res',res);
    //   }
    // })
    // wx.showModal({
    //   title: '微信授权',
    //   content: '天盛集申请获得以下权限：获得你的公开信息（昵称，头像等）',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    
  },
  onGotUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      isUserDataGet: true
    })
    app.globalData.userInfo = e.detail.userInfo;
    //  wx.setStorageSync("userInfo", e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (app.globalData.userInfo.nickName) {
      this.setData({
        userInfo: {
          nickName: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl,
        },
        isUserDataGet: true
      })
    }
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