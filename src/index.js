import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css'
import { PeopleProvider } from './contexts/PeopleContext'
import { ImageModalProvider } from './contexts/ImageModalContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <PeopleProvider>
      <ImageModalProvider>
        <App />
      </ImageModalProvider>
    </PeopleProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
