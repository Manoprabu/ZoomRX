import { Component } from '@angular/core';

interface listItem {
  list: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo List';
  listCard : listItem = {
    list : 1
  }
  listCount: Array<listItem> = [];

  addList() {
    this.listCard.list = this.listCount.length;
    this.listCount.push(this.listCard);
  }
  deleteCardList(evnt: any) {
    for(let i = 0; i<this.listCount.length; i++) {
      if(i == evnt) {
        this.listCount.splice(0,1);
        return;
      }
    }
  }
}
