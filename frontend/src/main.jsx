// Import the main App component for rendering the application
import { App } from './App.jsx'

// Import the ReactDOM package to interact with the DOM for rendering React components
import ReactDOM from "react-dom/client"

// Import the CSS file for styling the app
import './index.css'

// Get the root element from the DOM where the React app will be mounted
const container = document.getElementById("root")

// Create a root React element using the container to initialize the React application
const root = ReactDOM.createRoot(container)

// Render the App component into the root element of the DOM
root.render(<App />)