import styled from 'styled-components';
import { Card as BootstrapCard, Card, Form } from 'react-bootstrap';

export const CardStyled = styled(BootstrapCard)`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
    color: rgb(255, 255, 255);
    background-color: rgb(51, 51, 51);
`;

export const CardBodyStyled = styled(Card.Body)`
    width: 100%;
`;

export const FormGroupStyled = styled(Form.Group)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SpanStyled = styled.span`
     font-size: 1.2rem;
     font-weight: bold;
`;