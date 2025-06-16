//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {},
  // event handler function
  navigateToNewspapersScreen: function () {
    wx.navigateTo({
      url: '../newspapers/newspapers'
    })
  },
})
