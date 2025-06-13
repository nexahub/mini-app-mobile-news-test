//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToPaymentMethodScreen: function () {
    wx.navigateTo({
      url: '../payment_method/payment_method'
    })
  },
})
