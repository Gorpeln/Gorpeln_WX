// pages/number/number.js
Page({
  data: {
    number: 1,
    number1: 5,
    disabled1: false,
    disabled2: false
  },
  prevNum(){
    this.setData({ number: this.data.number + 1 });
  },
  nextNum(){
    this.setData({ number: this.data.number - 1 });
  },
  prevNum1() {
    this.setData({ 
      number1: this.data.number1 >= 10 ? 10 : this.data.number1 + 1 ,
      disabled1: this.data.number1 !== 0 ? false : true,
      disabled2: this.data.number1 !== 10 ? false : true
    });
  },
  nextNum1() {
    this.setData({ 
      number1: this.data.number1 <= 0 ? 0 : this.data.number1 - 1 ,
      disabled1: this.data.number1 !== 0 ? false : true,
      disabled2: this.data.number1 !== 10 ? false : true
    });
  }
})