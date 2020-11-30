import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent {

  constructor(private dialogRef: MatDialogRef<CardDescriptionComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
  
}
