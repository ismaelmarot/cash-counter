import type { FC } from 'react'
import type { TotalsProps } from '../../interface'
import {
    TotalContainer,
    TotalNumber,
    TotalSpan,
    IntegerPart,
    DecimalPart
} from './Total.styled'

export const Total: FC<TotalsProps> = ({ total }) => {
    const formatted = total.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const [integerPart, decimalPart] = formatted.split(',')

    return (
        <TotalContainer>   
            <TotalSpan>Total</TotalSpan> 
            <TotalNumber>
                <IntegerPart>{integerPart}</IntegerPart>
                <DecimalPart>,{decimalPart}</DecimalPart>
            </TotalNumber>               
        </TotalContainer>
    )
}