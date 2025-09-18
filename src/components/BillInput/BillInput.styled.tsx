import styled from 'styled-components';
import { Card as BootstrapCard, Card, Form } from 'react-bootstrap';

export const CardStyled = styled(BootstrapCard)`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
    color: #fff;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
`;

export const CardBodyStyled = styled(Card.Body)`
    width: 100%;
`;

export const FormGroupStyled = styled(Form.Group)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FormControl = styled(Form.Control)`
    max-width: 150px;
    text-align: right;
    font-size: 2rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
`

export const SpanStyled = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
`;

export const SpanX = styled.span`
    font-size: 2rem;
    margin: 0 10px;
`;