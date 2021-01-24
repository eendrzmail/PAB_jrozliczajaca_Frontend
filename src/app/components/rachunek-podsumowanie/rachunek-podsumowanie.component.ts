import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { bank } from 'src/app/dataModels/bank';
import { Rachunek } from 'src/app/dataModels/rachunek';
import { Transakcja } from 'src/app/dataModels/transakcja';
import { HttpserviceService } from 'src/app/services/httpservice.service';


@Component({
  selector: 'app-rachunek-podsumowanie',
  templateUrl: './rachunek-podsumowanie.component.html',
  styleUrls: ['./rachunek-podsumowanie.component.css']
})
export class RachunekPodsumowanieComponent implements OnInit {

  constructor(private http:HttpserviceService) { }

  bank= new FormControl();
  rachunki: Array<Rachunek>;
  filteredRachunki: Array<Rachunek>;
  nrrachunek:string;

  bankinfo: bank;

  transakcje: Array<Transakcja>;
  filteredTransakcje: Array<Transakcja>;

  ngOnInit() {
    this.getAllRachunki();


    this.inputListeners();
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
        console.dir(ret);
        this.bankinfo=ret;
      })
    }
  }

  getTransakcjeOfNr(nr){
    
    this.http.getTransakcjeByNr(nr).subscribe(ret => {
      this.transakcje=ret;
      this.filteredTransakcje=ret;
    })

  }

  clear(){
    this.bank.setValue("");
  }


  filterTransakcje(v){
    console.log(v);
    if (v=='all') {
      this.filteredTransakcje=this.transakcje;
    }
    else if (v=='+'){
      this.filteredTransakcje=[];
      this.filteredTransakcje=this.transakcje.filter(x => x.bank_odbiorcy==this.nrrachunek);
    }
    else if (v=='-'){
      this.filteredTransakcje=[]
      this.filteredTransakcje=this.transakcje.filter(x => x.bank_odbiorcy!=this.nrrachunek);
    }
    else {
      this.filteredTransakcje=this.transakcje;
    }
    console.dir(this.filteredTransakcje)
  }
  



  inputListeners(){

    this.bank.valueChanges.subscribe(val => {
      let temp=this.rachunki.filter(r =>  r.nr_rachunku.includes(val));
      this.filteredRachunki=temp;

      if (val.length==24){
        this.nrrachunek=val;
        this.getBankOfNr(val);
        this.getTransakcjeOfNr(val);
      }
    })

  }

}
