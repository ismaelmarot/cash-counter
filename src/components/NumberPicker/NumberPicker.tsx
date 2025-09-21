import { useState } from 'react';
import styled from 'styled-components';
import { CloseButton, NumberItem, NumberList, PopupContent, PopupOverlay, ZeroFixed } from './NumberPicker.styled';

interface NumberPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const NumberPicker = ({ value, onChange }: NumberPickerProps) => {
  const [open, setOpen] = useState(false);

  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1); // 1 → 1000

  return (
    <>
      {/* Trigger */}
      <span
        style={{ cursor: 'pointer', fontWeight: 'bold' }}
        onClick={() => setOpen(true)}
      >
        {value || '0'}
      </span>

      {open && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={() => setOpen(false)}>✖</CloseButton>
            <ZeroFixed
              onClick={() => {
                onChange('0');
                setOpen(false);
              }}
            >
              0
            </ZeroFixed>

            {/* Lista scrolleable */}
            <NumberList>
              {numbers.map((num) => (
                <NumberItem
                  key={num}
                  onClick={() => {
                    onChange(num.toString());
                    setOpen(false);
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
  );
};

export default NumberPicker;
