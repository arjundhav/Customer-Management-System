# Customer Management Application

The Customer Management Application is a web-based application built with Angular and Spring Boot that allows you to manage customer records. It provides features for creating, updating, viewing, and deleting customer details.

## Features

- Create a new customer by providing the customer's name, address, and mobile number.
- View a list of all customers with their respective details.
- Update customer information, including name, address, and mobile number.
- Delete a customer from the records.

## Technologies Used

- Angular: Front-end JavaScript framework for building the user interface.
- Spring Boot: Back-end Java framework for building RESTful APIs and handling server-side operations.
- Bootstrap: CSS framework for styling the application.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js: Download and install Node.js from the official website: https://nodejs.org
- Java Development Kit (JDK): Install JDK version 8 or above.

## Getting Started

Follow the steps below to set up and run the application:

1. Clone the repository: 

2. Frontend Setup:
   - Navigate to the `customer-management-app` directory: `cd customer-management-app`
   - Install the dependencies: `npm install`
   - Start the Angular development server: `ng serve`

3. Backend Setup:
   - Open a new terminal or command prompt.
   - Navigate to the `customer-management-app/backend` directory: `cd customer-management-app/backend`
   - Build and run the Spring Boot application: `./mvnw spring-boot:run`

4. Access the Application:
   - Open your web browser and visit `http://localhost:4200` to access the Angular application.

## API Endpoints

The backend API provides the following endpoints:

- GET `/api/customers`: Get a list of all customers.
- POST `/api/customers`: Create a new customer.
- GET `/api/customers/{id}`: Get details of a specific customer.
- PUT `/api/customers/{id}`: Update the details of a specific customer.
- DELETE `/api/customers/{id}`: Delete a specific customer.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please submit an issue or pull request.


 


