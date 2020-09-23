import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  tList = TodoComponent;

  itemlist = this.tList;


  update() {
    let edit = this.tList;
    for(let i = 0; i < this.tList.length; i++) {

        this.tList[i] = this.itemList.arrayList;

    }
  }

  closeModal(){
    
  }

  ngOnInit() {
  }

}