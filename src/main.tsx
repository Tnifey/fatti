import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

export default function render(root: HTMLElement, data: any) {
  if(root) {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

