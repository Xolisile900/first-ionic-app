import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  contentValue: string="";
  status: string;
  priority: boolean;
  addClicked: false;
  inputValue: string="";

  listName: any = '';
  arrayList = [];
  todoArr = [];
  updatelist: any = '';

addTask() {

  if (this.listName.length > 0) {
     let task = this.listName;
     this.arrayList.push(task);
     console.log(this.listName);

   //  this.todoArr = [
   //   {contentValue: listName, statu: " ", priority: false},
   //  ];

     this.listName = '';
   }
}

deleteTask(index) {
    this.status = "done";
    if (this.status == "done"){
      this.arrayList.splice(index, 1);
      this.priority = true;
    }
  }

  updateTask(index){
    //this.updatelist =
    this.arrayList = this.updatelist;
  }

  todoArr = [
   {contentValue: " ", statu: " ", priority: false},
  ];

  
 // inputList(){
   // this.contentValue = this.inputValue;
    //console.log(this.inputValue);
    //console.log(this.contentValue);
  //}

 // console.log(this.inputValue);

  //addToList() {
    //this.contentValue = this.inputValue;
    //this.todoArr.push(this.contentValue);//, this.status, this.priority);
    //this.model = {};
   // console.log(this.contentValue);
  //}

  //lableText: string = "";
    //inputValueToLable(){
      //console.log(this.inputValue);
      //this.lableText = this.inputValue;
    //}

  addClickedbtn() {
    this.addClicked = !this.addClicked;
  }

  

  ngOnInit() {
//this.taskName = this.id;
console.log("task "+this.listName);
  }


}