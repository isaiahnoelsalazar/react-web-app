import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import GlassSurface from './GlassSurface.tsx'
import SplitText from './SplitText.tsx'
import Silk from './Silk.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '100%', height: '-webkit-fill-available', position: 'absolute' }}>
      <Silk
        speed={3}
        scale={1}
        color="#377195"
        noiseIntensity={0}
        rotation={0}
      />
    </div>
    {/* <App /> */}
    <div style={{ placeItems: 'center', height: '-webkit-fill-available', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <GlassSurface 
        width={300} 
        height={200}
        borderRadius={48}
        className="glassy"
      >
        <SplitText
          text="Hello!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          tag="h1"
          textAlign="center"
        />
        {/* <h2>Glass Surface Content</h2> */}
      </GlassSurface>
    </div>
  </StrictMode>,
)
