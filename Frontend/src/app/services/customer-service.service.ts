import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  createCustomer(customer: any): Observable<any>  {
    const url = `${this.apiUrl}/add`;
    return this.http.post<any>(url, customer);
  }

  updateCustomer(customerId: number, customer: any): Observable<any> {
    const url = `${this.apiUrl}/update/${customerId}`;
    return this.http.put<any>(url, customer);
  }

  getCustomersList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteCustomer(customerId: number): Observable<any> {
    const url = `${this.apiUrl}/remove/${customerId}`;
    return this.http.delete<any>(url);
  }
}
