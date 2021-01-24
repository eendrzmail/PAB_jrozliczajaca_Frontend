import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { bank } from 'src/app/dataModels/bank';

@Component({
  selector: 'app-bank-edit-dialog',
  templateUrl: './bank-edit-dialog.component.html',
  styleUrls: ['./bank-edit-dialog.component.css']
})
export class BankEditDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BankEditDialogComponent>
    ) { }

    bank: bank

  ngOnInit() {
    this.bank=this.data.bank;
    //console.dir(this.data.bank);
  }

  zamknij(){
    this.dialogRef.close({data:this.bank});
  }

}
