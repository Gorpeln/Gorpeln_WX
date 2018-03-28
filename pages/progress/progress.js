// pages/progress/progress.js
Page({
  data: {
    index: 10
  },
  changeTabbar(e){
    this.setData({ index: e.currentTarget.dataset.id})
  }
})