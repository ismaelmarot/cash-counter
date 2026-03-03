import { styled } from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { size } from '../../mixins/setSize'
import { sizeMax } from '../../mixins/setSizeMax'
import { COLORS } from '../../constants/colors'

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
    ${flex('column', 'center', 'center')}
    ${sizeMax('400px', '90%')}
    background: ${COLORS.white};
    width: 90%;
    border-radius: 12px;
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

export const ZeroFixed = styled.div`
    width: 90%;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    border-bottom: 1px solid ${COLORS.lightGrey};
    background: ${COLORS.white};
    cursor: pointer;

    &:hover {
        background: ${COLORS.lightGreytWhite};
    }
`

export const NumberList = styled.div`
    width: 90%;
    flex: 1;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
`

export const NumberItem = styled.div`
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    scroll-snap-align: center;
    cursor: pointer;

    &:hover {
        background: ${COLORS.lightGreytWhite}
    }
`

export const SelectedNumber = styled.span`
    ${flex('column', 'center', 'center')}
    height: 60vh;
    font-size: 10rem;
    font-weight: bold;
    color: ${COLORS.white};
    cursor: pointer;
`