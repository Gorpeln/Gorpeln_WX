Page({
  data: {
    scrollTop: null
  },
  //滚动条监听
  scroll: function (e) {
    this.setData({ scrollTop: e.detail.scrollTop })
  },
})