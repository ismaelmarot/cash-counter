
import { useState, useEffect } from 'react'
import { NumberPickerProps } from '../../interface'
import {
  PopupOverlay,
  PopupContent,
  CloseButton,
  Display,
  Keypad,
  Key,
  ConfirmButton
} from './NumberPicker.styled'

export const NumberPicker = ({ value, onChange }: NumberPickerProps) => {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState<string>(value.toString())

  useEffect(() => {
    setTempValue(value.toString())
  }, [value])

  const handleNumberClick = (num: string) => {
    if (tempValue === '0') {
      setTempValue(num)
    } else {
      setTempValue(tempValue + num)
    }
  }

  const handleDelete = () => {
    if (tempValue.length <= 1) {
      setTempValue('0')
    } else {
      setTempValue(tempValue.slice(0, -1))
    }
  }

  const handleConfirm = () => {
    onChange(Number(tempValue))
    setOpen(false)
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {value.toLocaleString('es-AR')}
      </div>

      {open && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={() => setOpen(false)}>✖</CloseButton>

            <Display>
              {Number(tempValue).toLocaleString('es-AR')}
            </Display>

            <Keypad>
              {[1,2,3,4,5,6,7,8,9].map(num => (
                <Key key={num} onClick={() => handleNumberClick(num.toString())}>
                  {num}
                </Key>
              ))}

              <Key onClick={() => handleNumberClick('0')}>0</Key>
              <Key onClick={handleDelete}>⌫</Key>
              <ConfirmButton onClick={handleConfirm}>
                OK
              </ConfirmButton>
            </Keypad>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  )
}