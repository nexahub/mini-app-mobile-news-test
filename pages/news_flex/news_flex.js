//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToChooseNewspapersScreen: function () {
    wx.navigateTo({
      url: '../choose_newspapers/choose_newspapers'
    })
  },
})
