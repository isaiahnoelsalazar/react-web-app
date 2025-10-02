import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlassSurface from './GlassSurface.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlassSurface />
  </StrictMode>,
)
