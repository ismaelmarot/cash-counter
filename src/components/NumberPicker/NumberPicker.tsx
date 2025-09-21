import { useState } from 'react';
import styled from 'styled-components';
import { CloseButton, NumberItem, NumberList, PopupContent, PopupOverlay, SelectedNumber, ZeroFixed } from './NumberPicker.styled';
import { NumberPickerProps } from '../../interface/NumberPicker.interface';

const NumberPicker = ({ value, onChange }: NumberPickerProps) => {
  const [open, setOpen] = useState(false);

  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <>
      {/* Trigger */}
      <SelectedNumber onClick={() => setOpen(true)}>
        {value || '0'}
      </SelectedNumber>

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

            {/* Scrolleable List */}
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
