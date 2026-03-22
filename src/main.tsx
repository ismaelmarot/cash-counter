import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { SplashScreen } from './screens/SplashScreen'

function Root() {
  const [showApp, setShowApp] = useState(false)

  if (!showApp) {
    return <SplashScreen onComplete={() => setShowApp(true)} />
  }

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
