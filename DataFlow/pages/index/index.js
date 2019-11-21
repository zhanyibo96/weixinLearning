//index.js
//获取应用实例
const app = getApp()

Page({
 data:{
   message:"initial"
 },
  inputHandle:function(e){
    this.data.message=e.detail.value
    console.log(this.data.message)

    //this.setData是用来改变data中的数据
    //他与直接赋值区别在于setData可以通知界面做出变化
    //直接赋值无法实现这一点
    this.setData({
      message:e.detail.value
    })
    console.log(this.data)


 }
})
