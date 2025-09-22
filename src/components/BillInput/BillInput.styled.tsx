import styled from 'styled-components';
import { Card as BootstrapCard, Card, Form } from 'react-bootstrap';

export const CardInput = styled(BootstrapCard)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90%;
    border-radius: .8rem;
    background-color: rgba(0, 0, 0, 1);
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
`;

export const AmountTipe = styled.div`
    width: 95%;
    padding: .3rem 1rem;
    color: grey;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
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
    border-top: 1px solid rgba(255, 255, 255, 1);
    font-size: 2rem;
    color: rgb(255, 255, 255);
`;

export const PriceSimbol = styled.span`
    font-size: 1.5rem;
    color: rgb(128, 128, 128);
`;