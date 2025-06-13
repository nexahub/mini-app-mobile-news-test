//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToNewsInfinityScreen: function () {
    wx.navigateTo({
      url: '../news_infinity/news_infinity'
    })
  },
  navigateToNewsPremiumScreen: function () {
    wx.navigateTo({
      url: '../news_premium/news_premium'
    })
  },
  navigateToNewsStartScreen: function () {
    wx.navigateTo({
      url: '../news_start/news_start'
    })
  },
  navigateToNewsFlexScreen: function () {
    wx.navigateTo({
      url: '../news_flex/news_flex'
    })
  },
})
