import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #1a1a2e;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  animation: ${fadeIn} 0.5s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

export const AppIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: ${scaleIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 24px;
`

export const AppName = styled.h1`
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 12px 0;
  background: linear-gradient(
    90deg,
    #ffd700 0%,
    #ffaa00 50%,
    #ffd700 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${slideUp} 0.8s ease 0.2s both, shimmer 3s ease-in-out infinite;
  
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`

export const AppVersion = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #888;
  position: absolute;
  bottom: 60px;
`

export const Developer = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #666;
  position: absolute;
  bottom: 40px;
`

export const Description = styled.p`
  max-width: 320px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin: 0 0 40px 0;
  color: #aaa;
  animation: ${slideUp} 0.8s ease 0.4s both;
`

export const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  animation: ${slideUp} 0.8s ease 1s both;
`

export const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffd700;
  opacity: 0.6;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`
