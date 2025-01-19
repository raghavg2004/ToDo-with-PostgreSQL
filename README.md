# ToDo-with-PostgreSQL

A simple **Todo List Application** built using **HTML**, **CSS**, **JavaScript**, **Node.js**, **Express**, and **PostgreSQL**. This application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on their tasks.

---

## Features

- Add new tasks with titles and descriptions.
- Mark tasks as complete/incomplete.
- Delete tasks.
- View a list of all tasks.
- Responsive design for seamless use on any device.
- Persistent data storage using PostgreSQL.

---

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

---

## Getting Started

### File Structure
    todo-website/
    ├── node_modules
    ├── public/
    │   ├── index.html        # Main HTML file
    │   ├── style.css         # Stylesheet
    │   ├── script.js         # Frontend logic
    ├── server/
    │   ├── app.js            # Main server file
    │   ├── db.js             # Database connection logic
    │   ├── queries.sql       # SQL queries (optional)
    ├── .env                  # Environment variables
    ├── package.json          # Node.js configuration file
    ├── README.md             # Documentation file

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18.x or above recommended)
- [PostgreSQL](https://www.postgresql.org/) (version 13 or above)

---

 Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todo-website.git
   cd todo-website
   
2. **Install Dependencies Navigate to the server directory and install the required Node.js packages:**
   ```bash
    cd server
    npm install
   
3. **Set Up the Database**
      Create a new PostgreSQL database (e.g., todo_app).
      Execute the following SQL commands to set up the todos table
   ```bash
   CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
   
4. **Configure Environment Variables Create a .env file in the server directory with the following details:**
   ```bash
   PORT=3000
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=todo_app
    DB_PORT=5432

5. **Start the Application Run the backend server:**
  ```bash
  npm start
  ```

### License
This project is licensed under the MIT License. See the LICENSE file for details.

