// pages/indexed/indexed.js
var city_list = require('./city.js');

Page({
  data: {
    cityList: city_list.city,
    chooseCity: '您还未选择机场！',
    isShowLayer: false,
    chooseIndex: 0,
    len: [],
    code: null,
    codeY: 'A',
    codeHeight: null,
    cityHeight:null,
    scrollTop: 0
  },
  onLoad (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var arr = [];

    this.data.cityList.forEach(current => arr.push(current.cityList.length + 1));
    this.setData({ 
      codeHeight: (windowHeight - 50) / this.data.cityList.length,
      cityHeight: windowHeight - 50,
      len: arr
    });
  },
  getCurrentCode(e){
    var index = e.target.dataset.index, sum = 0,self = this;

    for (var j = 0; j < index; j++) {
      sum += this.data.len[j];
    }
    this.setData({ 
      codeY: e.target.dataset.code,
      chooseIndex: e.target.dataset.index,
      isShowLayer: true 
    })
    // this.setData({ 
    //   code: e.target.dataset.code,
    //   scrollTop: sum * 40,
    //   chooseIndex: index,
    //   isShowLayer: true     
    // });

    setTimeout(() => {
      self.setData({ isShowLayer: false })
    },500);
  },
  getChooseCity(e){
    this.setData({ chooseCity: e.target.dataset.city });
  }
})