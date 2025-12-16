# Go-Annapurna - Authentic Indian Food Delivery Application

Go-Annapurna is a full-stack web application designed to bring the authentic flavors of India to your doorstep. Built with the MERN stack (MongoDB (simulated), Express, React, Node.js), it offers a seamless food ordering experience with a modern, responsive user interface.

## 🚀 Features

- **User Authentication**: Secure Signup and Login functionality.
- **Dynamic Menu**: Browse a variety of authentic Indian dishes and cakes.
- **Cart Management**: Add items to cart, view summary, and manage quantities.
- **Wishlist**: Save your favorite dishes for later.
- **Checkout System**: Streamlined checkout process for easy ordering.
- **Responsive Design**: Fully responsive UI/UX built with Tailwind CSS, ensuring a great experience on mobile and desktop.
- **Interactive UI**: Smooth animations using Framer Motion.

## 🛠️ Technology Stack

### Frontend

- **React 19**: Modern UI library for building interactive interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
- **Redux Toolkit**: State management for Auth, Cart, and Wishlist.
- **React Router v7**: Declarative routing for React applications.
- **Framer Motion**: Production-ready animation library.
- **React Icons**: Popular icon packs for React.
- **React Hot Toast**: Beautiful notifications.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated web framework for Node.js.
- **File System (fs)**: Currently using local JSON files for data persistence (simulated database).
- **CORS**: Cross-Origin Resource Sharing middleware.
- **Body Parser**: Middleware to parse incoming request bodies.

## 📂 Project Structure

```bash
Go-Annapurna/
├── backend/                # Backend server and logic
│   ├── server.js           # Entry point for the backend
│   ├── users.json          # Data store for user information
│   └── package.json        # Backend dependencies
├── frontend/               # Frontend React application
│   ├── src/
│   │   ├── Components/     # Reusable UI components
│   │   ├── pages/          # Application pages (Home, Menu, Cart, etc.)
│   │   ├── store/          # Redux state management slices
│   │   ├── assets/         # Static assets (images)
│   │   └── App.jsx         # Main application component
│   └── package.json        # Frontend dependencies
└── README.md               # Project documentation
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/Go-Annapurna.git
    cd Go-Annapurna
    ```

2. **Setup the Backend**

    ```bash
    cd backend
    npm install
    npm start
    ```

    The backend server will start on `http://localhost:5000`.

3. **Setup the Frontend**
    Open a new terminal window:

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

    The frontend will launch typically on `http://localhost:5173`.

## 🔌 API Endpoints

- `POST /api/signup`: Register a new user.
  - Body: `{ "name": "...", "email": "...", "password": "..." }`
- `POST /api/login`: Authenticate a user.
  - Body: `{ "email": "...", "password": "..." }`

## 🛡️ Security Note

> [!WARNING]
> This project currently uses a local JSON file for data storage for demonstration purposes. **Passwords are currently stored in plain text.** For a production environment, please integrate a real database (like MongoDB) and implement password hashing (e.g., with bcrypt) to ensure user security.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.
