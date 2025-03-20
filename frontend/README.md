# Mini Expense Tracker - Frontend

This is the frontend of the **Mini Expense Tracker** application, built using **ReactJS**. It allows users to securely authenticate, manage their expenses, and view spending insights. The frontend communicates with a **Node.js** backend to handle authentication, expense management, and data visualization.

## Features
- **Authentication**:
  - Users can register and log in using JWT-based authentication with HTTP-only cookies.
  - Handles token expiry and refresh tokens.
- **Expense Management**:
  - Users can add, and view expenses.

- **Pages**:
  1. **Login/Registration**: Handles user authentication.
  2. **Dashboard**: Displays a list of expenses and spending insights.
  3. **Add Expense**: A form for adding new expenses.
  4. **Delete Expense**: Allows users to delete expenses.

## Technologies Used
- **ReactJS**: Frontend framework.
- **Create React App**: Used to bootstrap the project.
- **Axios**: For making API requests to the backend.
- **React Router**: For handling routing within the application.
- **Vercel**: For deployment.

## How to Run the Frontend
1. Clone the repository.
2. Navigate to the `frontend` folder:
   ```bash
   cd frontend
