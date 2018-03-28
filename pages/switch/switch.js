// pages/switch/switch.js
var pageObj = {
  data: {
    isChecked1: false,
    isChecked2: true,
    isChecked3: false,
    isChecked4: true,
    isChecked5: false,
    isChecked6: true
  }
};

for (var i = 0; i < 7; ++i) {
  (function (i) {
    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = !this.data['isChecked' + i];
      this.setData(changedData);
    }
  })(i)
}
Page(pageObj);