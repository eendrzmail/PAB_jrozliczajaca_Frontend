import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { bank } from 'src/app/dataModels/bank';
import { Rachunek } from 'src/app/dataModels/rachunek';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BankEditDialogComponent } from '../bank-edit-dialog/bank-edit-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  constructor(
    private http:HttpserviceService,
    public dialog:MatDialog,
    private _snackBar: MatSnackBar) { }

  bank= new FormControl();

  rachunki: Array<Rachunek>;
  filteredRachunki: Array<Rachunek>;
  nrrachunek:string;

  bankinfo: bank;

  ngOnInit() {
    this.getAllRachunki();

    this.inputListeners();
  }



  

  clear(){
    this.bank.setValue("");
  }

  getAllRachunki(){
    this.http.getRachunki().subscribe(ret => {
      this.rachunki=ret;
      this.filteredRachunki=ret;
    })
  }

  getBankOfNr(nr){
    let filt = this.rachunki.filter(r => r.nr_rachunku==nr);
    console.log("pobieram bank o nr:"+nr)

    if (filt.length>0){
      let b=filt[0];

      this.http.getBankOfNr(b.id_banku).subscribe(ret => {
       // console.dir(ret);
        this.bankinfo=ret;
      })
    }
  }




  openEdit(){
    const dialogRef = this.dialog.open(BankEditDialogComponent, {
      width: '400px',
      data: {bank: this.bankinfo}
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.dir(result)

      if (result!='false'){
        this.http.updateBank(result).subscribe(ret => {
          let a:any=ret;
          if (a.success){
            console.log("Wyswietl zielone")
            this.openSnackBar("Zaktualizowano","green-snackbar")
          }
          else{
            console.log("Wyswietl czertwone");
            this.openSnackBar("Nie udało się zaktualizować","red-snackbar")
          }
          //console.dir(ret);
        })
      }
      else{
        //console.log(result);
      }
      

    })
  }
  
  openSnackBar(message: string,style: string) {
    this._snackBar.open(message, "Ok", {
      duration: 2000,
      panelClass: [style]
    });
  }


  inputListeners(){

    this.bank.valueChanges.subscribe(val => {
      let temp=this.rachunki.filter(r =>  r.nr_rachunku.includes(val));
      this.filteredRachunki=temp;

      if (val.length==24){
        this.nrrachunek=val;
        this.getBankOfNr(val);
      }
    })

  }

}
