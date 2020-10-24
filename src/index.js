import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css'
import { PeopleProvider } from './contexts'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
