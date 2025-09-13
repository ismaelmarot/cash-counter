import { useState } from 'react';
import { denominations } from './constants/denominations';
import BillInput from './components/BillInput/BillInput';
import Footer from './components/Footer/Footer';
import Totals from './components/Totals/Totals';
import { ContainerStyled, DivStyled, H2 } from './App.styled';

function App() {
  const [quantities, setQuantities] = useState<string[]>(denominations.map(() => ''));

  const handleChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  return (
    <ContainerStyled>
      <H2>Cash Counter</H2>
      <DivStyled>
        {denominations.map((denom, i) => (
            <BillInput
              key={denom}
              denomination={denom}
              quantity={quantities[i]}
              onChange={(value: string) => handleChange(i, value)}
            />
        ))}
      </DivStyled>
      <Totals quantities={quantities} denominations={denominations} />
      <Footer />
    </ContainerStyled>
  );
}

export default App;
