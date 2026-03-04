import { styled } from 'styled-components'
import { flex, size } from '../../mixins'
import { COLORS } from '../../constants'

export const PopupOverlay = styled.div`
    ${flex('column', 'center', 'center')}
    ${size('100%', '100%')}
    position: fixed;
    top: 0;
    left: 0;
    background: ${COLORS.lightBlack};
    z-index: 2000;
`

export const PopupContent = styled.div`
    ${flex('column', 'center', 'space-between')}
    ${size('95%', '95%')}
    background: ${COLORS.white};
    border-radius: 5px;
    overflow: hidden;
    position: relative;
`

export const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
`

export const Display = styled.div`
  font-size: 8rem;
  text-align: right;
  padding: 1rem;
  color: ${COLORS.black};
`

export const Keypad = styled.div`
    display: grid;
    width: 90%;
    margin-bottom: 1rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const Key = styled.button`
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: 12px;
  border: none;
  background: ${COLORS.buttonNumber};
  cursor: pointer;
`

export const ConfirmButton = styled(Key)`
  color: ${COLORS.white};
  background: ${COLORS.blue};
`

export const Counter = styled.div`
  font-size: 8rem;
`