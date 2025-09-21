import type { FC } from 'react';
import type { TotalsProps } from '../../interface/Totals.interface';
import { TotalContainer, TotalNumber, TotalSpan, IntegerPart, DecimalPart } from './Total.styled';

const Totals: FC<TotalsProps> = ({ quantities, denominations }) => {
    const total = quantities.reduce(
        (acc, qty, i) => acc + (Number(qty) || 0) * denominations[i],
        0
    );

    const formatted = total.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const [integerPart, decimalPart] = formatted.split(',');

    return (
        <TotalContainer>   
            <TotalSpan>Total</TotalSpan> 
            <TotalNumber>
                <IntegerPart>{integerPart}</IntegerPart>
                <DecimalPart>,{decimalPart}</DecimalPart>
            </TotalNumber>               
        </TotalContainer>
    );
};

export default Totals;
