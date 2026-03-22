import { useRef, useState } from 'react'
import { useCashCounter } from './hooks'
import { DENOMINATIONS } from './constants'
import {
  BillInput,
  Footer,
  SummaryCard,
  Total,
  ResetModal
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

interface AppProps {
  onReset: () => void
}

function App({ onReset }: AppProps) {
  const { quantities, updateQuantity, total, resetAll } = useCashCounter()
  const [showResetModal, setShowResetModal] = useState(false)

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

  const handleReset = () => {
    resetAll()
    setShowResetModal(false)
    onReset()
  }

  return (
    <AppContainer>
      <div>
        <TitleButtonContainer>
          <Title>Cash Counter</Title>

          <ButtonRestart onClick={() => setShowResetModal(true)}>
            <RestarIcon size={22} />
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

      <ResetModal
        open={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleReset}
      />
    </AppContainer>
  )
}

export default App