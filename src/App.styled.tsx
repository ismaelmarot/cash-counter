import styled from 'styled-components';

export const ContainerStyled = styled.div`
    border: 5px solid rgb(51,51,51);
    padding-top: 1rem;
    background-color: rgb(255,255,255);
`
export const H2 = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    color: rgb(0, 0, 0);
`
export const DivStyled = styled.div`
    padding: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  background: #f9f9f9;
  border: 1px solid #ddd;
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
