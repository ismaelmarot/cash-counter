import styled from 'styled-components';
import { Card as BootstrapCard, Card, Form } from 'react-bootstrap';

export const CardInput = styled(BootstrapCard)`
    width: 90%;
    height: 95%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: .8rem;
    color: #000000;
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
`;

export const FormGroupStyled = styled(Form.Group)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
`;

export const AmountTipe = styled.div`
    margin: 3rem;
    padding: .3rem 1rem;
    border-radius: .5rem;
    background-color: rgba(90, 90, 102, 1);
    color: #ffffff;
`;

export const FormControl = styled(Form.Control)`
    max-width: 150px;
    text-align: right;
    font-size: 2rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
`

export const SpanX = styled.span`
    font-size: 1.5rem;
    margin-right: .5rem;
`;

export const SpanStyled = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
`;
