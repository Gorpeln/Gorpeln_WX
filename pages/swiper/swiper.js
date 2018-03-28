// pages/swiper/swiper.js
var banner = require("../../src/js/banner.js");
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    banner_url: banner.bannerList,
    circular: true
  },
  autoplaySwiper(e){
    this.setData({ autoplay: !this.data.autoplay});
  }
})