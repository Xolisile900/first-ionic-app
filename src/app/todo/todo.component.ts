import { Component, OnInit } from '@angular/core';

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

  todoArr = [
   {contentValue: " ", statu: " ", priority: false},
  ];

  
  inputList(){
    this.contentValue = this.inputValue;
    console.log(this.inputValue);
    console.log(this.contentValue);
  }

 // console.log(this.inputValue);

  addToList() {
    this.contentValue = this.inputValue;
    this.todoArr.push(this.contentValue);//, this.status, this.priority);
    //this.model = {};
    console.log(this.contentValue);
  }

  lableText: string = "";
    inputValueToLable(){
      console.log(this.inputValue);
      this.lableText = this.inputValue;
    }

  addClickedbtn() {
    this.addClicked = !this.addClicked;
  }

  

  ngOnInit() {
  }

}