import { forwardRef } from 'react';
import { denominations } from '../../constants/denominations';
import { Card } from '../../App.styled';
import { SummaryCardProps } from '../../interface/SummaryCard.interface';
import { CardStyled, ResumeContainer, H3, Amount, Quantity, NumberStyled, ButtonStyled, ButtonContainer, IntegerPart, DecimalPart, Total } from './SummaryCard.styled';

const SummaryCard = forwardRef<HTMLDivElement, SummaryCardProps>(
    ({ quantities, onDownload }, ref) => {
        const total = quantities.reduce(
        (acc, qty, i) => acc + (Number(qty) || 0) * denominations[i],
        0
    );

    const formattedTotal = total.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        const [integerPart, decimalPart] = formattedTotal.split(',');

    return (
        <CardStyled ref={ref}>
            <ResumeContainer>
                <H3>RESUMEN</H3>
                <div>
                    {denominations.map((denom, i) => (
                        <NumberStyled key={denom}>   
                            <Amount>
                                {denom.toLocaleString('es-AR')}
                            </Amount>  
                            <Quantity>
                                {quantities[i] || 0}
                            </Quantity>  
                         
                        </NumberStyled>
                    ))}
                    <hr />
                    <Total>
                        <IntegerPart>{integerPart}</IntegerPart>
                        <DecimalPart>,{decimalPart}</DecimalPart>
                    </Total>
                </div>
                <ButtonContainer>
                    <ButtonStyled onClick={onDownload}> DESCARGA </ButtonStyled>
                </ButtonContainer>
            </ResumeContainer>
        </CardStyled>
    );
  }
);

export default SummaryCard;
