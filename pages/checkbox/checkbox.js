// pages/checkbox/checkbox.js
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    checkArr: ['中国']
  },
  checkboxChange: function (e) {
    var arr = [];
    e.detail.value.forEach(current => {
      for (var value of this.data.items){
        if(current === value.name){
          arr.push(value.value);
          break;
        } 
      }
    });
    this.setData({checkArr: arr});
  }
})