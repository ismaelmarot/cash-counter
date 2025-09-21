import type { FC } from 'react';
import { BillInputProps } from '../../interface/BillInput.interface.js';
import { CardInput, SpanStyled, SpanX, AmountTipe, AmountTotal } from './BillInput.styled.js';
import NumberPicker from '../NumberPicker/NumberPicker';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    const formattedDenomination =
        denomination >= 1
        ? denomination.toLocaleString('es-AR', { minimumFractionDigits: 0 })
        : denomination.toLocaleString('es-AR', { minimumFractionDigits: 2 });

    const subtotal =
        (Number(quantity) || 0) * denomination;

    return (
        <CardInput>
            <AmountTipe>
                <SpanX>x</SpanX>
                <SpanStyled>{formattedDenomination}</SpanStyled>
            </AmountTipe>

            <NumberPicker value={quantity} onChange={onChange} />
            

            <AmountTotal>
                $ {subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </AmountTotal>
        </CardInput>
    );
};

export default BillInput;
