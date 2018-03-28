// pages/dialog/dialog.js
Page({
  data: {
    msg: ''
  },
  warnModal(){
    var self = this;
    wx.showModal({
      title: 'Hello World!',
      content: '中国欢迎你！',
      showCancel: false,
      confirmColor: '#007aff',
      success: function(){
        self.setData({ msg: '你刚关闭了警告框' });
      }
    })
  },
  warnModalTrue(){
    var self = this;
    wx.showModal({
      title: 'Hello 微信小程序!',
      content: '微信小程序是否好用？',
      confirmColor: '#007aff',
      cancelColor: '#007aff',
      confirmText:'是',
      cancelText: '否',
      success: function (res) {
        if (res.confirm) {
          self.setData({ msg: '微信小程序很好使用！' });
        } else if (res.cancel) {
          self.setData({ msg: '谢谢你的建议，微信小程序需继续优化！' });
        }
      }
    })
  },
  showModalInput(){
    var self = this;
    wx.showModal({
      title: 'Hello 微信小程序!',
      content: '<input/>',
      confirmColor: '#007aff',
      cancelColor: '#007aff',
      confirmText: '是',
      cancelText: '否',
      success: function (res) {
        if (res.confirm) {
          self.setData({ msg: '微信小程序很好使用！' });
        } else if (res.cancel) {
          self.setData({ msg: '谢谢你的建议，微信小程序需继续优化！' });
        }
      }
    })
  },
  showToastAuto(){
    var self = this;
    wx.showToast({
      title: '提示消息！',
      image: '../../src/images/btn.png',
      success: function (res) {
        self.setData({ msg: '消息提示消失！' });
      }
    })
  },
  showToast(){
    var self = this;
    wx.showToast({
      title: '成功',
      icon: 'success',
      success:function(res){
        self.setData({ msg: '提交成功！' });
      }
    })
  },
  showToastLoading(){
    var self = this;
    wx.showToast({
      title: '正在加载......',
      icon: 'loading',
      success: function (res) {
        self.setData({ msg: '正在加载！' });
      }
    })
  }
})