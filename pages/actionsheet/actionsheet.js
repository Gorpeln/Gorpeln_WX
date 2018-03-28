// pages/actionsheet/actionsheet.js
Page({
  data: {
  
  },
  openActionsheet(){
    wx.showActionSheet({
      itemList: ['拍照或录像','选取现有的'],
      itemColor: '#007aff',
      success(res){
        console.log(res.tapIndex);
        if (res.tapIndex === 0){
          wx.chooseVideo({
            sourceType: ['camera'],
            success(res){
              console.log(res.tempFilePath);
            }
          })
        }else if (res.tapIndex === 1){
          wx.chooseImage({
            count: 3, // 设置最多三张
            sizeType: ['original', 'compressed'], 
            sourceType: ['album', 'camera'], 
            success (res) {
              var tempFilePaths = res.tempFilePaths;
              // 图片预览
              wx.previewImage({
                current: res.tempFilePaths[0],
                urls: res.tempFilePaths
              })
            }
          })
        }
      }
    })
  },
  openActionsheetDe(e){
    wx.showActionSheet({
      itemList: ['删除信息'],
      itemColor: '#FF3B30',
      success(res){
        wx.showToast({title: '删除成功！'})
      }
    })
  },
  openActionsheetSh(e){
    wx.showActionSheet({
      itemList: ['回复','转发','打印'],
      itemColor: '#007aff',
      success(res) {
        if(res.tapIndex === 0){
          wx.showToast({ title: '回复成功！' });
        }else if(res.tapIndex === 1){
          wx.showToast({ title: '转发成功！' });
        }else if(res.tapIndex === 2){
          wx.showToast({ title: '打印成功！' });
        }
      }
    })
  }
})