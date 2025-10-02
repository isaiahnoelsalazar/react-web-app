import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlassSurface from './GlassSurface.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlassSurface 
      width={300} 
      height={200}
      borderRadius={24}
      className="my-custom-class"
    >
      <h2>Glass Surface Content</h2>
    </GlassSurface>
  </StrictMode>,
)
