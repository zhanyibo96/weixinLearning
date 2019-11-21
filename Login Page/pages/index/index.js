//index.js
//获取应用实例
/* 
  1.设计数据的结构（data属性）
  2.将数据绑定到
 */

// Page({
//   data:({
//     username:"",
//     password:""
//   }),
//   //登录事件
//   //处理表单的提交事件
//   loginHandle:function(){
//     //TODO:完成逻辑
//     //1.先需要知道用户输入的值
//     console.log(this.data)
//     //2.根据用户输入的值判断
//     //3.根据判断的结果做出相应
    
//   },
//   inputChangeHandle: function(e){
//     //this.data.username=e.detail.value 不使用这种方式，无法改变界面值
//     var prop=e.target.dataset.prop
//     var changed= {}
//     changed[prop]=e.detail.value

//     this.setData(changed)
//   }
  
  
// })

Page({
  data: {
    username: 'admin',
    password: '123'
  },
  // 用于处理表单提交事件
  loginHandle: function (e) {
    console.log(e)
  }
})
