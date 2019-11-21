//index.js
//获取应用实例
const app = getApp()

Page({
  //为页面提供数据的
  //data就是界面和逻辑之间的桥梁
  data:{
    message:"Hello World",
    person: {
      name:"张三",
      age:8
    },
    viewClassName:"hello",
    todos:[
      {name: "JavaScript" , completed:false},
      {name: "HTML" , completed:true},
      {name: "CSS" , completed:false}
    ]
  }
 })
