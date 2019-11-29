Page({
  tapHandle:function(){
    //当我们点击按钮 系统会自动执行这里的代码
    // console.log(111);
    wx.navigateTo({
      url: '../demo2/demo2',
    })
  }

    //重定向
  //   wx.redirectTo({
  //     url: '../demo2/demo2',
  //   })
  // }
})