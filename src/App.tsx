import { useRef } from 'react'
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
  ButtonRestart,
  Card,
  CardCashCounterContainer,
  RestarIcon,
  Title,
  TitleButtonContainer,
} from './App.styled'
import { useCashCounter } from './hooks'
import { VscDebugRestart } from 'react-icons/vsc'

function App() {
  const { quantities, updateQuantity, total } = useCashCounter()

  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth
      containerRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AppContainer>
      <div>
        <TitleButtonContainer>
          <Title>Cash Counter</Title>
          <ButtonRestart onClick={() => window.location.reload()}>
            <RestarIcon />
          </ButtonRestart>
        </TitleButtonContainer>

        <Total total={total} />

        <ArrowButton $left onClick={() => scroll('left')}>
          ◀
        </ArrowButton>

        <ArrowButton onClick={() => scroll('right')}>
          ▶
        </ArrowButton>

        <CardCashCounterContainer ref={containerRef}>
          {DENOMINATIONS.map((denom, i) => (
            <Card key={`${denom}-${i}`}>
              <BillInput
                denomination={denom}
                quantity={quantities[i]}
                onChange={(value: number) => updateQuantity(i, value)}
              />
            </Card>
          ))}

          <SummaryCard quantities={quantities} />
        </CardCashCounterContainer>
      </div>

      <Footer />
    </AppContainer>
  )
}

export default App