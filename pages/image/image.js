// pages/image/image.js
Page({
  data: {
    imagePath: '',
  },
  handleChooseAlbum(){
    //系统API，让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success:(res) => {
        const path = res.tempFilePaths[0];
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片完成加载')
  }
})