import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const TotalContainer = styled(Card)`
    display: flex;
    flex-direction: row;;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: .5rem;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 0;
`;

export const TotalSpan = styled.span`
    font-size: 1.5rem;
    color: #ffffff;
`;

export const TotalNumber = styled.span`
    font-size: 3rem;
    /* color: #ffffff; */
    color: rgb(131,227,100)
`;

export const IntegerPart = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const DecimalPart = styled.span`
  font-size: 2rem;
  color: gray;
  margin-left: 0.1rem;
`;