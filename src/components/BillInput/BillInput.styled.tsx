import styled from 'styled-components'
import { Card as BootstrapCard } from 'react-bootstrap'
import { COLORS } from '../../constants'
import { flex } from '../../mixins/setFlex'
import { size } from '../../mixins/setSize'

export const CardInput = styled(BootstrapCard)`
    ${flex('column', 'center','center')}
    ${size('90%','90%')}
    border-radius: .8rem;
    background-color: ${COLORS.black};
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    box-shadow: 0 8px 32px ${COLORS.lightGrey};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 12px 40px ${COLORS.lightGrey};
    }
`;

export const AmountTipe = styled.div`
    width: 95%;
    padding: .3rem 1rem;
    color: ${COLORS.white};
    border-bottom: 1px solid ${COLORS.white};
`;

export const SpanX = styled.span`
    font-size: 1.2rem;
    margin-right: .5rem;
`;

export const Denomination = styled.span`
    font-size: 1.8rem;
`;

export const AmountTotal = styled.div`
    width: 95%;
    padding: .3rem 1rem;
    text-align: right;
    border-top: 1px solid ${COLORS.white};
    font-size: 2rem;
    color: ${COLORS.white};
`;

export const PriceSimbol = styled.span`
    padding-right: .5rem;
    font-size: 1.5rem;
    color: ${COLORS.grey};
`;

export const IntegerPart = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const DecimalPart = styled.span`
  font-size: 1.5rem;
  color: ${COLORS.grey};
`;