import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardDescriptionComponent } from '../card-description/card-description.component';
import { EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardIndex: number = 0;
  @Output() delCardItem = new EventEmitter<number>();

  constructor(public matDialog: MatDialog) { }

  cardExpand() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(CardDescriptionComponent, dialogConfig);
  }

  deleteCard(item: number) {
    this.delCardItem.emit(item);
  }
}
