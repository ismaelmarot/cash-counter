import { useState, useRef } from 'react';
import { toJpeg } from 'html-to-image';
import { denominations } from './constants/denominations';
import BillInput from './components/BillInput/BillInput';
import Footer from './components/Footer/Footer';
import Total from './components/Total/Total';
import SummaryCard from './components/SummaryCard/SummaryCard';
import { AppContainer, Title, CardCashCounterContainer, Card, ArrowButton } from './App.styled';

function App() {
  const [quantities, setQuantities] = useState<string[]>(denominations.map(() => ''));
  const containerRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth',
      });
    }
  };

  const handleDownload = async () => {
    if (summaryRef.current) {
      const dataUrl = await toJpeg(summaryRef.current, { quality: 0.95 });
      const link = document.createElement('a');
      link.download = 'resumen.jpg';
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <AppContainer>
      <div>
        <Title>Cash Counter</Title>
        <Total quantities={quantities} denominations={denominations} />

        <ArrowButton left onClick={() => scroll('left')}>◀</ArrowButton>
        <ArrowButton onClick={() => scroll('right')}>▶</ArrowButton>

        <CardCashCounterContainer ref={containerRef}>
          {denominations.map((denom, i) => (
            <Card key={denom}>
              <BillInput
                denomination={denom}
                quantity={quantities[i]}
                onChange={(value: string) => handleChange(i, value)}
              />
            </Card>
          ))}

          <SummaryCard
            ref={summaryRef}
            quantities={quantities}
            onDownload={handleDownload}
          />
        </CardCashCounterContainer>
      </div>
      <Footer />
    </AppContainer>
  );
}

export default App;
