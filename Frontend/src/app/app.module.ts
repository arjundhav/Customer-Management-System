import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomerService } from './services/customer-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
