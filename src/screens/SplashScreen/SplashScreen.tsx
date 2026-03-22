import { useEffect, useRef } from 'react'
import {
  AppIcon,
  AppName,
  AppVersion,
  Container,
  Description,
  Developer,
  Dot,
  LoadingDots,
} from './SplashScreen.styles'

interface SplashScreenProps {
  onComplete: () => void
}

const APP_NAME = 'Cash Counter'
const DESCRIPTION = 'Count your banknotes and coins quickly and accurately.'
const APP_VERSION = 'v1.1.0 Stable'

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const hasCompleted = useRef(false)

  useEffect(() => {
    console.log('SplashScreen mounted')
    
    if (hasCompleted.current) return
    hasCompleted.current = true

    const timer = setTimeout(() => {
      console.log('SplashScreen timeout reached')
      onComplete()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  const skipSplash = () => {
    console.log('SplashScreen skip clicked')
    if (!hasCompleted.current) {
      hasCompleted.current = true
      onComplete()
    }
  }

  return (
    <Container onClick={skipSplash} style={{ background: '#1a1a2e', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <AppIcon 
        src="/cash-counter/icons/icon_cap.png" 
        alt="Cash Counter Logo" 
        style={{ width: '120px', height: '120px', borderRadius: '24px', marginBottom: '24px' }}
      />
      <AppName style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffd700', marginBottom: '12px' }}>{APP_NAME}</AppName>
      <Description style={{ color: '#aaa', marginBottom: '40px' }}>{DESCRIPTION}</Description>

      <LoadingDots style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
        <Dot $delay={0} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffd700' }} />
        <Dot $delay={0.2} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffd700' }} />
        <Dot $delay={0.4} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffd700' }} />
      </LoadingDots>

      <AppVersion style={{ color: '#888', marginTop: '60px' }}>{APP_VERSION}</AppVersion>
      <Developer style={{ color: '#666', marginTop: '8px' }}>Developed by Ismael Marot</Developer>
    </Container>
  )
}
