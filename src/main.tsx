import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import GlassSurface from './GlassSurface.tsx'
// import SplitText from './SplitText.tsx'
import LightRays from './LightRays.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFFFFF"
        raysSpeed={0.7}
        lightSpread={8}
        rayLength={32}
        followMouse={false}
        saturation={1}
        pulsating={false}
        mouseInfluence={0}
        noiseAmount={0}
        distortion={0.7}
        fadeDistance={64}
        className="rays"
      />
    </div>
    {/* <App /> */}
    <div className="glassy-container" style={{ placeItems: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <GlassSurface 
        width={300} 
        height={200}
        borderRadius={48}
        className="glassy"
      >
        {/* <SplitText
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
        /> */}
        {/* <h2>Glass Surface Content</h2> */}
      </GlassSurface>
    </div>
  </StrictMode>,
)
