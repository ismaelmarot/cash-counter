import styled from 'styled-components'
import { flex, size } from './mixins'
import { VscDebugRestart } from 'react-icons/vsc'
import { COLORS } from './constants'

export const AppContainer = styled.div`
  background-color: ${COLORS.white};
  position: relative;
  overflow: hidden;
`

export const TitleButtonContainer = styled.div`
  ${flex('row','center','space-between')}
  align-items: stretch;
`

export const Title = styled.h2`
  height: 100%;
  margin: 0;
  padding: .5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  color: ${COLORS.black};
`

export const ButtonRestart = styled.button`
  width: 4rem;
  background-color: transparent;
  padding: 0;
  border: none;
`

export const RestarIcon = styled(VscDebugRestart)`
  ${size('100%','100%')}
  max-width: 3rem;
`

export const DivStyled = styled.div`
  height: 100dvh;
`

export const CardCashCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Card = styled.div`
  ${flex('column','center','center')}
  flex: 0 0 100%;
  scroll-snap-align: start;
`

export const ArrowButton = styled.button<{ $left?: boolean }>`
  ${size('40px','40px')}
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  z-index: 10;
  background: ${COLORS.black};
  color: ${COLORS.white};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: ${COLORS.black};
    background: ${COLORS.white};
  }
`