import styled from 'styled-components'
import { Card as BootstrapCard } from 'react-bootstrap'
import { COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const CardInput = styled(BootstrapCard)`
    ${flex('column', 'center','space-between')};
    ${size('90%','95%')}
    border-radius: 25px;
    background-color: ${COLORS.black};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: ${COLORS.white};
    font-size: 4rem;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 12px 40px ${COLORS.lightGrey};
    }
`;

export const AmountTipe = styled.div`
    ${flex('row', 'flex-end','flex-start')};
    width: 95%;
    color: ${COLORS.white};
    border-bottom: 1px solid ${COLORS.white};
`;

export const SpanX = styled.span`
    font-size: 1.2rem;
    margin: 0rem .3rem .2rem;
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