import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  

  constructor() { }
  todo = TodoComponent;
  list: any = '';

  edit(){
    //let task = this.listName;
    // console.log(this.listName);
     //this.listName = '';
     todo.listName = this.list;
     this.list = '';
  }


  ngOnInit() {
  }

}