import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import { COLORS } from '../../constants';

export const TotalContainer = styled(Card)`
  display: flex;
  flex-direction: row;;
  justify-content: space-between;
  align-items: flex-end;
  padding: .2rem;
  border-radius: 0;
  background-color: ${COLORS.black};
`

export const TotalSpan = styled.span`
  padding: .5rem;
  font-size: 1.5rem;
  letter-spacing: .3rem;
  color: ${COLORS.white};
`

export const TotalNumber = styled.span`
  font-size: 3rem;
  color: ${COLORS.green};
  height: 100%;
`

export const IntegerPart = styled.span`
  font-size: 3rem;
  font-weight: bold;
`

export const DecimalPart = styled.span`
  font-size: 2rem;
  color: ${COLORS.grey};
  margin-left: 0.1rem;
`