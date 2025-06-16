//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  navigateToPaymentMethodScreen: function () {
    wx.navigateTo({
      url: '../payment_method/payment_method'
    })
  },
})
