import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';


const routes: Routes = [
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'customer-list', component:CustomerListComponent,pathMatch: 'full' },
  { path: 'customer-update', component: CustomerUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
