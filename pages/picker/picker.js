// pages/picker/picker.js
Page({
  data: {
    // 普通选择器列表设置,及初始化
    countryList: ['中国','美国','英国','日本','韩国','巴西','德国'],
    countryIndex: 6,
    // 省市区三级联动初始化
    region: ["四川省", "广元市", "苍溪县"],
    // 多列选择器(二级联动)列表设置,及初始化
    multiArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    multiIndex: [3,5],
    // 多列选择器(三级联动)列表设置,及初始化
    multiArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    multiIndex3: [3, 5, 4]
  },
  // 选择国家函数
  changeCountry(e){
    this.setData({ countryIndex: e.detail.value});
  },
  // 选择省市区函数
  changeRegin(e){
    this.setData({ region: e.detail.value });
  },
  // 选择二级联动
  changeMultiPicker(e) {
    this.setData({multiIndex: e.detail.value})
  },
  // 选择三级联动
  changeMultiPicker3(e) {
    this.setData({ multiIndex3: e.detail.value })
  }
})