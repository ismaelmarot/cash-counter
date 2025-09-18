import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardStyled = styled(Card)`
    margin: 0 1rem 2rem;
    padding: 1rem;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    background-color: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const H3 = styled.h3`
    display: flex;
    justify-content: space-between;
    font-size: 2.5rem;
`;
