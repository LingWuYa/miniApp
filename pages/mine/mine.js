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
      nickName: "个人昵称",
      avartarUrl: "/images/shop/others.png"
    },
    myAdd: wx.getStorageSync("address")?wx.getStorageSync("address").addressDetail:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onGotUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      isUserDataGet: true
    })
    app.globalData.userInfo = e.detail.userInfo;
    //  wx.setStorageSync("userInfo", e.detail.userInfo)
  },

  addAddress:function(e){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          var that = this;
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) {
              // console.log(res)
              // var latitude = res.latitude
              // var longitude = res.longitude
              wx.chooseAddress({
                success: function (res) {
                  that.setData({
                    myAdd: res.cityName + res.countyName + res.detailInfo
                  })
                  wx.setStorageSync("address", {
                    addressDetail: res.provinceName + res.cityName + res.countyName + res.detailInfo,
                    teliphone:res.telNumber,
                    userName:res.userName
                  })
                }
              })
            }
          })
        }
      }
    }) 
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