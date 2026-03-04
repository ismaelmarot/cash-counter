import styled from 'styled-components'
import { IoMdAlert } from 'react-icons/io'
import { flex, size } from '../../mixins'
import { COLORS } from '../../constants'

export const ModalOverlay = styled.div`
    ${flex('column','center','center')};
    position: fixed;
    inset: 0;
    z-index: 1000;
    backdrop-filter: blur(4px);
    background: ${COLORS.blackBlur};
`

export const TextContainer = styled.div`
    flex: 4;
    ${flex('column','center','center')};
`

export const ModalContent = styled.div`
    ${flex('column','center','center')};
    ${size('95%', '98%')}
    max-height: 98%;
    padding: 2rem 1rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 40px ${COLORS.blackBlur};
    background: ${COLORS.white};

    h3 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
    }

    p {
        margin: 0;
        opacity: 0.7;
        font-size: 1.3rem;
    }
`

export const AlertIcon = styled(IoMdAlert)`
    font-size: 4rem;
    color: ${COLORS.red};
`

export const ModalButtons = styled.div`
    flex: 1;
    ${flex('row','center','center')};
    width: 100%;
    border-top: 1px solid ${COLORS.grey};

    button {
        flex: 1;
        margin-top: 3rem;
        padding: .75rem 0;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: .95rem;
        font-weight: 500;
        border-radius: 25px;
    }

    button:first-child {
        font-size: 2rem;
        font-weight: 400;
        color: ${COLORS.black};
        background-color: ${COLORS.lightGrey};
    }

    button:last-child {
        margin-left: .5rem;
        font-size: 2rem;
        font-weight: 600;
        color: ${COLORS.white};
        background-color: ${COLORS.red};
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 40px ${COLORS.lightGrey};
            background-color: ${COLORS.red};
            font-size: 2.5rem;
        }
    }

    button:hover {
        background: ${COLORS.blackBlur};
    }
`