import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.querySelector(".root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);