import React, { useState } from 'react'
import Login from './login'
import Dashboard from './User'
import OfficerDashboard from './Lmo'
import AdminDashboard from './Admin'

const App = () => {
  const [currentView, setCurrentView] = useState('login')

  return (
    <div>
      {currentView === 'login' && (
        <Login
          onSelectPortal={(portal) => {
            if (portal === 'user') {
              setCurrentView('user')
            } else if (portal === 'lmo') {
              setCurrentView('lmo')
            } else if (portal === 'admin') {
              setCurrentView('admin')
            } else {
              setCurrentView('user')
            }
          }}
        />
      )}
      {currentView === 'user' && (
        <Dashboard onLogout={() => setCurrentView('login')} />
      )}
      {currentView === 'lmo' && (
        <OfficerDashboard onLogout={() => setCurrentView('login')} />
      )}
      {currentView === 'admin' && (
        <AdminDashboard onLogout={() => setCurrentView('login')} />
      )}
    </div>
  )
}

export default App