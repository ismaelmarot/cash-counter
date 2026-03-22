import { useEffect, useRef } from 'react'

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
    <div 
      onClick={skipSplash}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: '#1a1a2e',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        animation: 'fadeIn 0.5s ease',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
      
      <img 
        src="/cash-counter/icons/icon_cap.png" 
        alt="Cash Counter Logo"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '24px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          marginBottom: '24px',
          animation: 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      />
      
      <h1 style={{
        fontSize: '36px',
        fontWeight: '800',
        margin: '0 0 12px 0',
        background: 'linear-gradient(90deg, #ffd700 0%, #ffaa00 50%, #ffd700 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'slideUp 0.8s ease 0.2s both, shimmer 3s ease-in-out infinite',
      }}>
        {APP_NAME}
      </h1>
      
      <p style={{
        maxWidth: '320px',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        textAlign: 'center',
        margin: '0 0 40px 0',
        color: '#aaa',
        animation: 'slideUp 0.8s ease 0.4s both',
      }}>
        {DESCRIPTION}
      </p>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '20px',
        animation: 'slideUp 0.8s ease 1s both',
      }}>
        {[0, 0.2, 0.4].map((delay) => (
          <div
            key={delay}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ffd700',
              opacity: 0.6,
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      <span style={{
        fontSize: '13px',
        fontWeight: '500',
        color: '#888',
        position: 'absolute',
        bottom: '60px',
      }}>
        {APP_VERSION}
      </span>
      
      <span style={{
        fontSize: '12px',
        fontWeight: '400',
        color: '#666',
        position: 'absolute',
        bottom: '40px',
      }}>
        Developed by Ismael Marot
      </span>
    </div>
  )
}
