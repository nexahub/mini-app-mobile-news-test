//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToPaymentStatusScreen: function () {
    wx.navigateTo({
      url: '../payment_status/payment_status'
    })
  },
})
