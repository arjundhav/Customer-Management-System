import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get<any[]>('http://localhost:8080/api/customers')
      .subscribe(
        response => {
          this.customers = response; // Update the customers array
        },
        error => {
          console.error(error); // Handle error response
        }
      );
  }
}
