# node_contact-manager-api

# Contact API

A simple Node.js and Express REST API for managing contacts.  
It supports basic CRUD (Create, Read, Update, Delete) operations.

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Semich11/node_contact-manager-api.git

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. By default, the server will run on:
  http://localhost:9000
  



📌 API Endpoints
Contact

 Method  | Endpoint        | Description      
| GET    | `/api/`         | Get all contacts           
| GET    | `/api/:id`      | Get a contact by ID        
| POST   | `/api/create-contact`| Create a new contact
| PUT    | `/api/edit-contact/:id` | Update an existing contact
| DELETE | `/api/delete-contact/:id` | Delete a contact       


📦 Tech Stack

Node.js

Express.js

