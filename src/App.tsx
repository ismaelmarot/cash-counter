import { useState, useRef } from 'react';
import { denominations } from './constants/denominations';
import BillInput from './components/BillInput/BillInput';
import Footer from './components/Footer/Footer';
import Totals from './components/Totals/Totals';
import { ContainerStyled, H2 } from './App.styled';
import { CardsContainer, Card, ArrowButton } from './App.styled';

function App() {
  const [quantities, setQuantities] = useState<string[]>(denominations.map(() => ''));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  // Mover el scroll con las flechas
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ContainerStyled>
      <H2>Cash Counter</H2>

      <ArrowButton left onClick={() => scroll('left')}>◀</ArrowButton>
      <ArrowButton onClick={() => scroll('right')}>▶</ArrowButton>

      <CardsContainer ref={containerRef}>
        {denominations.map((denom, i) => (
          <Card key={denom}>
            <BillInput
              denomination={denom}
              quantity={quantities[i]}
              onChange={(value: string) => handleChange(i, value)}
            />
          </Card>
        ))}
      </CardsContainer>

      <Totals quantities={quantities} denominations={denominations} />
      <Footer />
    </ContainerStyled>
  );
}

export default App;
