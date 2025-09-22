import type { FC } from 'react';
import { BillInputProps } from '../../interface/BillInput.interface.js';
import { 
    CardInput, 
    Denomination, 
    SpanX, 
    AmountTipe, 
    AmountTotal, 
    PriceSimbol, 
    IntegerPart, 
    DecimalPart 
} from './BillInput.styled.js';
import NumberPicker from '../NumberPicker/NumberPicker';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    const formattedDenomination =
        denomination >= 1
        ? denomination.toLocaleString('es-AR', { minimumFractionDigits: 0 })
        : denomination.toLocaleString('es-AR', { minimumFractionDigits: 2 });

    const subtotal = (Number(quantity) || 0) * denomination;

    const formattedSubtotal = subtotal.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const [integerPart, decimalPart] = formattedSubtotal.split(',');

    return (
        <CardInput>
            <AmountTipe>
                <SpanX>x</SpanX>
                <Denomination>{formattedDenomination}</Denomination>
            </AmountTipe>

            <NumberPicker value={quantity} onChange={onChange} />
            
            <AmountTotal>
                <PriceSimbol>$</PriceSimbol>
                <IntegerPart>{integerPart}</IntegerPart>
                <DecimalPart>,{decimalPart}</DecimalPart>
            </AmountTotal>
        </CardInput>
    );
};

export default BillInput;
