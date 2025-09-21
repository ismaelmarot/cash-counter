import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: rgb(255,255,255);
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  height: 5vh;
  padding: .3rem 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: rgb(0, 0, 0);
`;

export const DivStyled = styled.div`
  height: 100vh;
`;

export const CardCashCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  scroll-snap-align: start;
`;

export const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: rgba(0,0,0,0.8);
  }
`;
