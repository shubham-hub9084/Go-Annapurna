# Go-Annapurna - Authentic Indian Food Delivery Application 🍛

Go-Annapurna is a robust, full-stack web application designed to deliver the authentic flavors of India directly to your doorstep. Built with the **MERN Stack** (MongoDB, Express, React, Node.js), it creates a seamless and visually stunning food ordering experience. This project showcases modern web development practices, responsive design, and state management.

## 🚀 Features

- **User Authentication**: Secure Login and Signup functionality using JWT-style architecture (simulated with local storage for demo).
- **Dynamic Menu Exploration**: Browse a rich catalog of Indian delicacies (Curries, Breads, Rice, Snacks) and specialized Cakes.
- **Smart Cart System**: Real-time cart management with quantity adjustments and price calculation.
- **Wishlist**: Save favorite dishes to your personal wishlist for quick access.
- **Optimized Checkout**: A streamlined checkout flow to finalize orders efficiently.
- **Responsive & Modern UI**: Built with **Tailwind CSS v4** for a mobile-first, adaptive design that looks great on all devices.
- **Smooth Animations**: Integrated **Framer Motion** for engaging UI transitions and interactions.
- **Interactive Notifications**: Real-time feedback using **React Hot Toast**.
- **Data Persistence**: Backend uses a local JSON file system to simulate database operations for users and orders.

## 🛠️ Technology Stack & Libraries

### Frontend (Client-Side)

The frontend is built with **React 19** and powered by **Vite** for lightning-fast performance.

| Category | Technology | Description |
|----------|------------|-------------|
| **Core Framework** | [React 19](https://react.dev/) | The library for web and native user interfaces. |
| **Build Tool** | [Vite](https://vitejs.dev/) | Next Generation Frontend Tooling. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | A utility-first CSS framework for rapid UI development. |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Declarative routing for React web applications. |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) | The official, opinionated, batteries-included toolset for efficient Redux development. |
| **Binding** | [React Redux](https://react-redux.js.org/) | Official React bindings for Redux. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | A production-ready motion library for React. |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) | Smoking hot React notifications. |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Include popular icons in your React projects easily. |

### Backend (Server-Side)

The backend is a lightweight **Node.js** server using **Express**.

| Category | Technology | Description |
|----------|------------|-------------|
| **Runtime** | [Node.js](https://nodejs.org/) | JavaScript runtime built on Chrome's V8 engine. |
| **Framework** | [Express](https://expressjs.com/) | Fast, unopinionated, minimalist web framework for Node.js. |
| **Middleware** | [CORS](https://www.npmjs.com/package/cors) | Provides a Connect/Express middleware that can be used to enable CORS. |
| **Parsing** | [Body-Parser](https://www.npmjs.com/package/body-parser) | Node.js body parsing middleware. |
| **Development** | [Nodemon](https://nodemon.io/) | Utility that monitors for any changes in your source and automatically restarts your server. |

### Development Tools

- **ESLint**: For identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Vite Plugin React**: Speed up your development workflow with SWC/Babel.

## 📂 Project Structure

```bash
Go-Annapurna/
├── backend/                # Express Server Logic
│   ├── server.js           # Main Entry point
│   ├── users.json          # Simulated Database for Users
│   └── package.json        # Backend Dependencies
├── frontend/               # React Application
│   ├── src/
│   │   ├── Components/     # Reusable UI Components (Navbar, Footer, etc.)
│   │   ├── pages/          # Major Route Pages (Menu, Cart, Login, etc.)
│   │   ├── store/          # Redux Slices (cartSlice, authSlice)
│   │   ├── assets/         # Images and Static Files
│   │   └── App.jsx         # Main Application Component
│   ├── vite.config.js      # Vite Configuration
│   └── package.json        # Frontend Dependencies
└── README.md               # Project Documentation
```

## ⚡ Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/YourUsername/Go-Annapurna.git
    cd Go-Annapurna
    ```

2. **Set Up Backend**

    ```bash
    cd backend
    npm install
    npm start
    ```

    *Server will start running on port 5000.*

3. **Set Up Frontend**
    Open a new terminal window:

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

    *Frontend will launch on port 5173 (usually <http://localhost:5173>).*

## 🔌 API Endpoints (Backend)

| Method | Endpoint | Description | Payload Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/signup` | Register a new user | `{ name, email, password }` |
| `POST` | `/api/login` | Login existing user | `{ email, password }` |

## 🛡️ Security Note

> [!WARNING]
> This application currently uses a local JSON file (`users.json`) for data persistence functionality. **Passwords are stored in plain text.** For a production environment, you must:
>
> 1. Integrate a real database like MongoDB.
> 2. Implement password hashing (e.g., using `bcryptjs`).
> 3. Use Environment Variables (`.env`) for secrets.

## 🤝 Contribution

Contributions are welcome! If you'd like to improve features, fix bugs, or optimize the code:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

Distributed under the ISC License. See `LICENSE` for more information.
