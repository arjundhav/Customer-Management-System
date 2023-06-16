import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {
  customer = {
    name: '',
    address: '',
    mobileNumber: ''
  };

  constructor(private service: CustomerService) {}

  create() {
    this.service.createCustomer(this.customer)
      .subscribe(
        response => {
          console.log(response);
          alert('Successfully created a new customer');
        },
        error => {
          console.log(error);
          alert('Failed to create a new customer');
        });
  }
}
