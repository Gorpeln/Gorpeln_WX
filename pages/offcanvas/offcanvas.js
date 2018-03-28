// pages/offcanvas/offcanvas.js
var app = getApp();

Page({
  data: {
    nav_list: ['ES6学习之路', 'CSS特效', 'VUE实战', '微信小程序'],
    isOpen: false,
    chooseList: ''
  },
  chooseItem (e) {
    this.setData({ 
      isOpen: false,
      chooseList: e.currentTarget.dataset.text
    });
  },
  changeCanvas () {
    this.setData({ isOpen: !this.data.isOpen});
  }
})