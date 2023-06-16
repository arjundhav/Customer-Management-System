import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-service.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customers!: any[];
  selectedCustomer: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomersList()
      .subscribe(
        response => {
          this.customers = response;
        },
        error => {
          console.error(error);
        }
      );
  }

  editCustomer(customer: any) {
    this.selectedCustomer = { ...customer };
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.selectedCustomer.id, this.selectedCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.selectedCustomer = null;
          this.loadCustomers();
        },
        error => {
          console.error(error);
        }
      );
  }

  deleteCustomer(customerId: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(customerId)
        .subscribe(
          response => {
            console.log(response);
            alert(`Successfully deleted customer with id ${customerId}`)
            this.loadCustomers();
          },
          error => {
            console.error(error);
          }
        );
    }
  }
}
