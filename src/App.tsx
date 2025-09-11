import { useState } from 'react';
import { Container } from 'react-bootstrap';
import BillInput from './components/BillInput';
import { denominations } from './constants/denominations';

function App() {
  const [quantities, setQuantities] = useState<string[]>(denominations.map(() => ''));

  const handleChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  return (
    <Container  style={{backgroundColor:'rgb(255,211,8)', borderRadius:'5px', padding:'2rem .5rem', border:'8px solid rgb(51,51,51)'}}>
      <h2 className='mb-4 text-center' style={{fontSize:'2rem'}}>Cash Counter</h2>
      <div>
        {denominations.map((denom, i) => (
            <BillInput
              key={denom}
              denomination={denom}
              quantity={quantities[i]}
              onChange={(value) => handleChange(i, value)}
            />
        ))}
      </div>
    </Container>
  );
}

export default App;
