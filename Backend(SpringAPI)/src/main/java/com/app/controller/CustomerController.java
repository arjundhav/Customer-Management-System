// It handles incoming HTTP requests to the API endpoints. 

package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.CustomerRequest;
import com.app.model.Customer;
import com.app.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/customers")
public class CustomerController {
	@Autowired
	CustomerService customerService;

	@PostMapping("/add")
    public ResponseEntity<Customer> addCustomer(@RequestBody CustomerRequest customerRequestDTO) {
        Customer customer = customerService.addCustomer(customerRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(customer);
    }
    
    @DeleteMapping("/remove/{id}")
    public ResponseEntity<Void> removeCustomer(@PathVariable("id") Long customerId) {
        customerService.deleteCustomer(customerId);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> updateCustomer(
            @PathVariable("id") Long customerId,
            @RequestBody CustomerRequest customerRequestDTO
    ) {
        Customer customer = customerService.updateCustomer(customerId, customerRequestDTO);
        return ResponseEntity.ok(customer);
    }
    
    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }
}