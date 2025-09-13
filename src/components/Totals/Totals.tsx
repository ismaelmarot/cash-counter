import type { FC } from 'react';
import type { TotalsProps } from '../../interface/Totals.interface';
import { CardStyled, H3 } from './Totals.styled';

const Totals: FC<TotalsProps> = ({ quantities, denominations }) => {
    const total = quantities.reduce(
        (acc, qty, i) => acc + (Number(qty) || 0) * denominations[i],
        0
    );

    return (
        <CardStyled>
            <H3> 
                <span>Total $:</span> 
                {total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </H3>
        </CardStyled>
    );
};

export default Totals;
