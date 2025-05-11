# Coffee Delivery ☕

Welcome to Coffee Delivery, a modern and responsive e-commerce application for a virtual coffee shop. Users can browse different types of coffee, add items to their cart, and complete their purchase with a seamless checkout process.

![Home](https://github.com/BrunoFgR/ignite2025/tree/main/frontend/challenges/coffee_delivery/public/home.gif)

## 🚀 Technologies

This project was built using the following technologies:

### Core Technologies
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript, enhancing code quality and developer experience
- **Vite** - A modern frontend build tool that significantly improves development experience

### Styling and UI
- **Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs
- **Shadcn/ui** - A collection of reusable components built with Radix UI and Tailwind CSS
- **Radix UI** - Unstyled, accessible components for building high-quality design systems

### State Management
- **Context API** - React's built-in state management solution
- **useReducer** - Hook for managing complex state logic
- **use-context-selector** - Optimized context API with selector pattern
- **Immer** - Simplifies immutable state management

### Form Handling
- **React Hook Form** - Performant, flexible and extensible forms with easy-to-use validation
- **Zod** - TypeScript-first schema validation with static type inference

### Routing
- **React Router** - Declarative routing for React applications

### HTTP Client
- **Axios** - Promise-based HTTP client for the browser and Node.js

### Additional Libraries
- **Phosphor React** - A flexible icon family for interfaces
- **Lucide React** - Beautiful & consistent icons
- **React Input Mask** - Input masking component for React
- **CVA (Class Variance Authority)** - Create UI variants with a type-safe API
- **clsx** - A utility for constructing className strings conditionally
- **tailwind-merge** - Efficiently merge Tailwind CSS classes

## 🎨 Design

This project is based on the Figma design by Rocketseat:

[View Figma Design](https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate)

## 🖥️ Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Dark Mode** - Toggle between light and dark themes
- **Product Listing** - Browse all coffee options
- **Shopping Cart** - Add, update, and remove items
- **Checkout Process** - Complete address and payment information
- **Order Confirmation** - View order details after purchase

![Cart and Checkout](https://github.com/BrunoFgR/ignite2025/tree/main/frontend/challenges/coffee_delivery/public/checkout.gif)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/BrunoFgR/coffee-delivery.git
cd coffee-delivery
```

2. Install dependencies:
```
npm install
# or
yarn
```

### Running the Development Server

1. Start the JSON Server for the API:
```
npm run dev:server
# or
yarn dev:server
```

2. In a new terminal, start the frontend application:
```
npm run dev
# or
yarn dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```
npm run build
# or
yarn build
```

## API Setup

This project requires a mock API to function properly. The project uses JSON Server to simulate a backend API.

The mock API is defined in the `server.json` file and includes the following endpoints:

- `/coffees` - List of available coffees
- `/address` - Customer addresses
- `/payments` - Payment methods
- `/orders` - Customer orders

> **Important**: The project is configured to connect to the API at `http://localhost:3001`. You may need to modify the `baseURL` in `src/lib/axios.ts` to match your local network configuration.

Make sure to start the JSON Server before running the application using the `dev:server` script.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

---

Made with ❤️ by [BrunoFgR](https://github.com/BrunoFgR)
