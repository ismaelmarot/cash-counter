import { useState } from 'react'
import { NumberPickerProps } from '../../interface'
import {
  CloseButton,
  NumberItem,
  NumberList,
  PopupContent,
  PopupOverlay,
  SelectedNumber,
  ZeroFixed
} from './NumberPicker.styled'

export const NumberPicker = ({ value, onChange }: NumberPickerProps) => {
  const [open, setOpen] = useState(false)
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1)

  return (
    <>
      <SelectedNumber onClick={() => setOpen(true)}>
        {value === 0 ? '0' : value.toLocaleString('es-AR')}
      </SelectedNumber>

      {open && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={() => setOpen(false)}>✖</CloseButton>

            <ZeroFixed
              onClick={() => {
                onChange(0)
                setOpen(false)
              }}
            >
              0
            </ZeroFixed>

            <NumberList>
              {numbers.map((num) => (
                <NumberItem
                  key={num}
                  onClick={() => {
                    onChange(num)
                    setOpen(false)
                  }}
                >
                  {num.toLocaleString('es-AR')}
                </NumberItem>
              ))}
            </NumberList>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  )
}