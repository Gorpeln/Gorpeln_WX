// pages/previewimage/previewimage.js
Page({
  data: {
    previewImageArr:[]
  },
  previewImage(e){
    var self = this;
    wx.chooseImage({
      count:8,
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        self.setData({ previewImageArr: tempFilePaths});
      }
    })
  },
  changePreview(e){
    var self = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: self.data.previewImageArr
    })
  }
})