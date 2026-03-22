import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { SplashScreen } from './screens/SplashScreen/SplashScreen'

const SPLASH_SHOWN_KEY = 'cash_counter_splash_shown'

function Root() {
  const [showApp, setShowApp] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    const splashShown = sessionStorage.getItem(SPLASH_SHOWN_KEY)
    if (splashShown) {
      setShowApp(true)
    }
  }, [])

  const handleSplashComplete = () => {
    console.log('handleSplashComplete called')
    sessionStorage.setItem(SPLASH_SHOWN_KEY, 'true')
    setShowApp(true)
  }

  const handleReset = () => {
    setResetKey(prev => prev + 1)
  }

  if (!showApp) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return <App key={resetKey} onReset={handleReset} />
}

createRoot(document.getElementById('root')!).render(<Root />)
