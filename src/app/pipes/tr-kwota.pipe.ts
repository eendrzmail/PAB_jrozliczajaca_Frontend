import { Pipe, PipeTransform } from '@angular/core';
import { bank } from '../dataModels/bank';
import { Rachunek } from '../dataModels/rachunek';
import { Transakcja } from '../dataModels/transakcja';

@Pipe({
  name: 'trKwota'
})
export class TrKwotaPipe implements PipeTransform {

  transform(value: Transakcja, rachunek: string) {
    let str=value.bank_nadawcy==rachunek?`<div class="green" style="margin-left:auto">-${value.kwota}zł</div>`:`<div>+${value.kwota}zł</div>`
    return str;
  }

}
