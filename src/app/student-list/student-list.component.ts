import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  github:string,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    // 需要被排序的数组
    if(type=="asc"){
      this.users.sort(function (a, b) {
      if (a.id > b.id) {
      return 1;
      }
      if (a.id < b.id) {
      return -1;
      }
      // a 必须等于 b
      return 0;
      })
      }
    if(type=="desc"){
      this.users.sort(function (a, b) {
      if (a.id > b.id) {
      return -1;
      }
      if (a.id < b.id) {
      return 1;
      }
      // a 必须等于 b
      return 0;
      })else{
      }
      }
      if(type=="random"){
        this.users.sort(function (a, b) {
          if (a.id !== b.id) {
          return Number(Math.random()*10).toFixed(0);
          }
        }
      }
    }
      
  loadUsersData(){
    this.users = [
      {id:1,name:"Apple",github:"Apple",sex:"male"},
      {id:2,name:"Big",github:"Big",sex:"male"},
      {id:3,name:"Cat",github:"Cat",sex:"female"},
      {id:4,name:"Dog",github:"Dog",sex:"male"},
      {id:5,name:"Elephone",github:"Elephone",sex:"male"},
      {id:6,name:"Fly",github:"Fly",sex:"female"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"Jack",
      github:"Jack",
      sex:"male"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
