//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToSubscriptionRecapScreen: function () {
    wx.navigateTo({
      url: '../subscription_recap/subscription_recap'
    })
  },
})
