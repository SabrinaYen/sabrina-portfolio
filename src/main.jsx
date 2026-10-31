import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.less'
import App from './App.jsx'
import { trackVisit } from './track-visit.js'

trackVisit()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
