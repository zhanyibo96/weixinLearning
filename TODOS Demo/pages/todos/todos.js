// pages/todos/todos.js
Page({
  data:{
    //文本框数据模型
    input:"",
    //任务清单数据模型
    todos:[
      { name: 'Learning weapp', completed: false },
      { name: "Learning HTML", completed: true },
      { name: "Learning JavaScript", completed: false }
    ],
    leftCount:2,
    allCompleted:false
  },
  inputChangeHandle: function(e){
    this.setData({input: e.detail.value});
  },
  addTodoHandle: function(){
    if (this.data.input=='') return
    //当添加按钮点击事件发生时执行函数
    var todos = this.data.todos
    todos.push({
      name:this.data.input,
      completed:false
    })
    //必须显示的通过setData改变数据，界面才会得到变化
    this.setData({ todos:todos,
      input:'' , leftCount:this.data.leftCount+1});
  },
  //1.添加事项按钮点击时添加一段代码
  //2.（1）由于小程序的数据绑定是单向的
  //  （2）必须要给文本注册改变事件
  //3.将这个值添加到列表当中
  toggleTodoHandle:function(e){
    //切换当前选中的item的完成状态
    // console.log(e.currentTarget); 获取当前项为第几项
    var item=this.data.todos[e.currentTarget.dataset.index];
    item.completed=!item.completed;
    //根据当前的任务的完成状态，添加或减少item
    var leftCount=this.data.leftCount + (item.completed ? -1 : 1 )
    this.setData({todos:this.data.todos,leftCount:leftCount });
  },
  //注意冒泡问题
  removeTodoHandle:function(e){
    var todos = this.data.todos;
    var item = todos.splice(e.currentTarget.dataset.index,1)[0];
    //todos中会移除掉 index所指向的元素
    var leftCount=this.data.leftCount - (item.completed ? 0 : 1 );
    this.setData({todos:todos, leftCount: leftCount});
  },
  toggleAllHandle:function(e){
    this.data.allCompleted=!this.data.allCompleted;
    var todos=this.data.todos;
    var that=this;
    todos.forEach(function(item){
      item.completed=that.data.allCompleted;
    })
    var leftCount=this.data.allCompleted ? 0 : this.data.todos.length;
    this.setData({ todos:todos,leftCount:leftCount });
  },
  clearHandle:function(e){
    // var todos=[];
    // this.data.todos.forEach(function(item){
    //   if (!item.completed) {
    //     todos.push(item)
    //   }
    // })
    var todos=this.data.todos.filter(function(item){
      return !item.completed
    })
    //todos=>新的未完成的任务列
    this.setData({ todos:todos })
  }
})