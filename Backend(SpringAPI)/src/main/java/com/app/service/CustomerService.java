//It contains business logic to store,retrieve,delete and update.
package com.app.service;

import com.app.model.Customer;
import com.app.dto.CustomerRequest;
import com.app.repository.CustomerRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;
    
    public Customer addCustomer(CustomerRequest customerRequestDTO) {
        Customer customer = new Customer();
        customer.setName(customerRequestDTO.getName());
        customer.setAddress(customerRequestDTO.getAddress());
        customer.setMobile(customerRequestDTO.getMobileNumber());
        
        return customerRepository.save(customer);
    }
    
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
    
    public Customer updateCustomer(Long customerId, CustomerRequest customerRequestDTO) {
        Optional<Customer> optionalCustomer = customerRepository.findById(customerId);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            customer.setName(customerRequestDTO.getName());
            customer.setAddress(customerRequestDTO.getAddress());
            customer.setMobileNumber(customerRequestDTO.getMobileNumber());
            
            return customerRepository.save(customer);
        } else {
            throw new IllegalArgumentException("Customer not found with ID: " + customerId);
        }
    }
    
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}

