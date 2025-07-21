# Node.js, Express, and MySQL REST API

This is a RESTful API built with Node.js, Express, and MySQL. It provides a foundation for building a variety of applications.

## Features

- **Express Server**: A robust and minimalist web framework for Node.js.
- **MySQL Integration**: Uses Sequelize for object data modeling (ORM) to interact with a MySQL database.
- **RESTful API**: Follows REST principles for a clean and predictable API design.
- **JWT Authentication**: Secures endpoints using JSON Web Tokens.
- **User Roles**: Implements user and admin roles for authorization.
- **Request Validation**: Uses Joi to validate incoming request data.
- **Winston Logging**: Logs application events and errors.
- **Custom Error Handling**: Provides a structured approach to error handling.
- **Database Seeding**: Seeds the database with default data on startup.
- **Swagger Documentation**: Interactive API documentation with Swagger UI.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MySQL](https://www.mysql.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nodejs-express-mysql-rest-api.git
   cd nodejs-express-mysql-rest-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project by copying the `.env.example` file:

   ```bash
   cp .env.example .env
   ```

   Then, update the `.env` file with your environment variables.

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start on the port specified in your `.env` file (or 5000 by default).

You can access the API documentation at `http://localhost:5000/api-docs`.

## License

This project is licensed under the MIT License.
