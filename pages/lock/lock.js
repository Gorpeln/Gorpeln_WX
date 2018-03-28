// pages/lock/lock.js
var Locker = require('./h5lock.js');
Page({
  data: {
    title: '请绘制您的图形密码'
  },
  onReady(){
    // var ctx = wx.createCanvasContext('canvas');
    this.lock = new Locker(this,{
      id: 'canvas',
      cleColor:'rgba(0,136,204,1)',
      cleCenterColor:'rgba(0,136,204,1)',
      chooseType: 3
    });
  },
  resetPwd() {
    this.lock.updatePassword();
  }
})