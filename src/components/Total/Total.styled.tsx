import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const TotalContainer = styled(Card)`
  display: flex;
  flex-direction: row;;
  justify-content: space-between;
  align-items: flex-end;
  padding: .2rem;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 1);
`;

export const TotalSpan = styled.span`
  padding: .5rem;
  font-size: 1.5rem;
  letter-spacing: .3rem;
  color: #ffffff;
`;

export const TotalNumber = styled.span`
  font-size: 3rem;
  color: rgb(131,227,100);
  height: 100%;
`;

export const IntegerPart = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const DecimalPart = styled.span`
  font-size: 2rem;
  color: rgb(128, 128, 128);
  margin-left: 0.1rem;
`;