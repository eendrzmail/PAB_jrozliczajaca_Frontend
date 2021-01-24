import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bank } from '../dataModels/bank';
import { Rachunek } from '../dataModels/rachunek';
import { Transakcja } from '../dataModels/transakcja';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  rachunki = "https://jrozliczajaca.herokuapp.com/api/getrachunki";
  banki= "https://jrozliczajaca.herokuapp.com/api/bank";
  transakcje = "https://jrozliczajaca.herokuapp.com/api/transakcje";

  getRachunki():Observable<Rachunek[]>{
    return this.http.get<Rachunek[]>(this.rachunki);
  }

  getBankOfNr(nr):Observable<bank>{
    return this.http.get<bank>(this.banki+`?nr=${nr}`);
  }

  getTransakcjeByNr(nr):Observable<Transakcja[]>{
    return this.http.get<Transakcja[]>(this.transakcje+`?nr=${nr}`);
  }

  updateBank(bank:bank){
    const headers = { 'content-type': 'application/json',responseType: 'json'} 
    const body = bank;
    return this.http.put(this.banki,body,{'headers':headers});
  }

}
