import { Component, EventEmitter, Input, Output } from '@angular/core';
interface cardDetails {
  content: string
}
interface listItem {
  list: number
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {
  @Input() index: number = 0;
  @Input() listItems: Array<listItem> = [];
  @Output() delItem = new EventEmitter<number>();

  cardNumber: cardDetails = {
    content : ''
  };
  cardCount: Array<cardDetails> = [];

  constructor() { }

  addCard() {
    this.cardCount.push(this.cardNumber);
  }

  deleteList(item: number) {
    this.delItem.emit(item);
  }
  
  deleteCard(evnt: any) {
    for(let i = 0; i<this.cardCount.length; i++) {
      if(i == evnt) {
        this.cardCount.splice(0,1);
        return;
      }
    }
  }
}
