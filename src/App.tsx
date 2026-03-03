import { useState, useRef } from 'react'
import { DENOMINATIONS } from './constants'
import {
  BillInput,
  Footer,
  SummaryCard,
  Total
} from './components'
import {
  AppContainer,
  ArrowButton,
  Card,
  CardCashCounterContainer,
  Title,
} from './App.styled'

function App() {
  const [quantities, setQuantities] = useState<string[]>(DENOMINATIONS.map(() => ''))
  const containerRef = useRef<HTMLDivElement>(null)

  const handleChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value
    setQuantities(newQuantities)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AppContainer>
      <div>
        <Title>Cash Counter</Title>
        <Total quantities={quantities} denominations={DENOMINATIONS} />
        
        <ArrowButton $left onClick={() => scroll('left')}>◀</ArrowButton>
        <ArrowButton onClick={() => scroll('right')}>▶</ArrowButton>

        <CardCashCounterContainer ref={containerRef}>
          {DENOMINATIONS.map((denom, i) => (
            <Card key={denom}>
              <BillInput
                denomination={denom}
                quantity={quantities[i]}
                onChange={(value: string) => handleChange(i, value)}
              />
            </Card>
          ))}
          <SummaryCard
            quantities={quantities}
          />
        </CardCashCounterContainer>
      </div>
      <Footer />
    </AppContainer>
  )
}

export default App