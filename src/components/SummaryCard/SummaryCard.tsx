import { forwardRef } from 'react'
import jsPDF from 'jspdf'
import { DENOMINATIONS } from '../../constants'
import { SummaryCardProps } from '../../interface/SummaryCard.interface'
import {
  Amount,
  ButtonContainer,
  ButtonStyled,
  CardStyled,
  DecimalPart,
  H3,
  IntegerPart,
  NumberStyled,
  ResumeContainer,
  Quantity,
  Total
} from './SummaryCard.styled'

export const SummaryCard = forwardRef<HTMLDivElement, SummaryCardProps>(
  ({ quantities }, ref) => {
    const total = quantities.reduce(
      (acc, qty, i) => acc + (Number(qty) || 0) * DENOMINATIONS[i],
      0
    )

    const formattedTotal = total.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    const [integerPart, decimalPart] = formattedTotal.split(',')

    const handleDownloadPDF = () => {
      const doc = new jsPDF()

      doc.setFontSize(16)
      doc.text("RESUMEN", 105, 15, { align: "center" })

      doc.setFontSize(12)
      let y = 30
      DENOMINATIONS.forEach((denom, i) => {
        const qty = Number(quantities[i]) || 0
        const subtotal = qty * denom

        doc.text(`${denom.toLocaleString('es-AR')}`, 20, y)
        doc.text(`x ${qty}`, 70, y)
        doc.text(`= ${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`, 120, y)

        y += 10;
      })

      doc.setLineWidth(0.5)
      doc.line(20, y, 180, y)
      y += 10

      doc.setFontSize(14);
      doc.text(`TOTAL: ${total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`, 105, y, { align: "center" })

      doc.save("resumen.pdf")
    };

    return (
      <CardStyled ref={ref}>
        <ResumeContainer>
          <H3>RESUMEN</H3>
          <div>
            {DENOMINATIONS.map((denom, i) => (
              <NumberStyled key={denom}>
                <Amount>{denom.toLocaleString('es-AR')}</Amount>
                <Quantity>{quantities[i] || 0}</Quantity>
              </NumberStyled>
            ))}
            <hr />
            <Total>
              <IntegerPart>{integerPart}</IntegerPart>
              <DecimalPart>,{decimalPart}</DecimalPart>
            </Total>
          </div>
          <ButtonContainer>
            <ButtonStyled onClick={handleDownloadPDF}>DESCARGA PDF</ButtonStyled>
          </ButtonContainer>
        </ResumeContainer>
      </CardStyled>
    )
  }
)