// pages/slider/slider.js
Page({
  data: {
    slider1: 50,
    slider2: 50,
    slider3: 50,
    slider4: 50
  },
  changeSlider1(e) {
    this.setData({ slider1: e.detail.value })
  },
  changeSlider2(e){
    this.setData({ slider2: e.detail.value})
  },
  changeSlider3(e) {
    this.setData({ slider3: e.detail.value })
  },
  changeSlider4(e) {
    this.setData({ slider4: e.detail.value })
  }
})