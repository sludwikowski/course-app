import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './firebaseConfig'

import UserContextProvider from './contexts/UserContext'

import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App/>
    </UserContextProvider>
  </Router>,
  document.getElementById('root')
)
reportWebVitals()
