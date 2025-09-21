import type { FC } from 'react';
import { BillInputProps } from '../../interface/BillInput.interface.js';
import { CardInput, FormControl, FormGroupStyled, SpanStyled, SpanX, AmountTipe } from './BillInput.styled.js';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    // Usamos es-AR para que los miles tengan "." y decimales ","
    const formattedDenomination =
        denomination >= 1
            ? denomination.toLocaleString('es-AR', { minimumFractionDigits: 0 })
            : denomination.toLocaleString('es-AR', { minimumFractionDigits: 2 });

    return (
        <CardInput>
            <FormGroupStyled>
                <AmountTipe>
                    <SpanX>x</SpanX>
                    <SpanStyled>{formattedDenomination}</SpanStyled>
                </AmountTipe>
                <FormControl
                    type='number'
                    min={0}
                    value={quantity}
                    placeholder=''
                    onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
                />
            </FormGroupStyled>
        </CardInput>
    );
};

export default BillInput;
