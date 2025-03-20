# Mini Expense Tracker - Backend

This is the backend of the **Mini Expense Tracker** application, built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose** as the ORM. It handles user authentication, expense management, and spending insights.

## Features
- **Authentication**:
  - JWT-based authentication with HTTP-only cookies.
  - Users can register, log in, and log out.
  - Handles token expiry and refresh tokens.
- **Expense Management**:
  - Users can add, delete, and view expenses.

- **Spending Insights**:
  - Calculates total spending and total expense.


## Technologies Used
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and expense data.
- **Mongoose**: ORM for MongoDB.
- **JWT**: For secure authentication.
- **Bcrypt**: For password hashing.
- **CORS**: For handling cross-origin requests.
- **Dotenv**: For managing environment variables.
- **Cookie-parser**: For parsing cookies.
- **Express-validator**: For request validation.
- **Moment.js**: For date manipulation (optional, if used).

## Dependencies
Here are all the dependencies used in the backend:

```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "cookie-parser": "^1.4.6",
  "express-validator": "^6.15.0",
  "moment": "^2.29.4"
}