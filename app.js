// app.js
App({
  onLaunch:function(){
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },
  onHide:function(){

  },
  onShow:function(){

  },
  onError:function(){

  }
})
