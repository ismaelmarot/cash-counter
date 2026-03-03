import styled from 'styled-components'
import { Card } from '../../App.styled'
import { flex, size } from '../../mixins'
import { COLORS } from '../../constants'

export const CardStyled = styled(Card)`
    ${flex('column', 'center', 'center')};
`

export const ResumeContainer = styled.div`
    ${size('95vw', '72vh')};
    padding: 1rem;
    border-radius: 1rem;
    color: ${COLORS.white};
    background-color: ${COLORS.black};

    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${COLORS.grey} ${COLORS.lightBlack};

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${COLORS.lightBlack};
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${COLORS.grey};
        border-radius: 4px;
    }
`

export const H3 = styled.h3`
    padding-bottom: .7rem;
    color: ${COLORS.grey};
    border-bottom: 2px solid ${COLORS.grey};
`

export const Amount = styled.span`
    ${flex('row', 'center', 'center')};
    font-size: 1.5rem
`

export const Quantity = styled.span`
    color: ${COLORS.white};
    font-size: 2rem;
`

export const NumberStyled = styled.div`
    ${flex('row', 'center','space-between')};
`

export const ButtonStyled = styled.button`
    border-radius: 5px;
    padding: .5rem 1rem;
    color: ${COLORS.black};
    background-color: ${COLORS.green};
`

export const ButtonContainer = styled.div`
    ${flex('row', 'center', 'center')};
    margin-top: 2rem;
    font-weight: bold;
`

export const Total = styled.div`
    width: 100%;
    text-align: end;
`

export const IntegerPart = styled.span`
    font-size: 3rem;
    color: ${COLORS.green};
`

export const DecimalPart = styled.span`
    font-size: 2rem;
    color: ${COLORS.grey};
`