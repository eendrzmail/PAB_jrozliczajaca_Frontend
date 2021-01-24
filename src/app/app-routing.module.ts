import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankEditComponent } from './components/bank-edit/bank-edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { RachunekPodsumowanieComponent } from './components/rachunek-podsumowanie/rachunek-podsumowanie.component';


const routes: Routes = [
  { path: "", component: MenuComponent},
  { path: "zobacz", component: RachunekPodsumowanieComponent},
  { path: "zobacz/:id", component: RachunekPodsumowanieComponent},
  { path: "edit", component: BankEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
