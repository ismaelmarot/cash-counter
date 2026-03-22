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
    if (hasCompleted.current) return
    hasCompleted.current = true

    const timer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  const skipSplash = () => {
    if (!hasCompleted.current) {
      hasCompleted.current = true
      onComplete()
    }
  }

  return (
    <Container onClick={skipSplash}>
      <AppIcon 
        src="/cash-counter/icons/icon_cap.png" 
        alt="Cash Counter Logo" 
      />
      <AppName>{APP_NAME}</AppName>
      <Description>{DESCRIPTION}</Description>

      <LoadingDots>
        <Dot $delay={0} />
        <Dot $delay={0.2} />
        <Dot $delay={0.4} />
      </LoadingDots>

      <AppVersion>{APP_VERSION}</AppVersion>
      <Developer>Developed by Ismael Marot</Developer>
    </Container>
  )
}
