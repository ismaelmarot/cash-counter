import type { FC } from 'react';
import { BillInputProps } from '../../interface/BillInput.interface.js';
import { CardBodyStyled, CardStyled, FormControl, FormGroupStyled, SpanStyled, SpanX } from './BillInput.styled.js';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    return (
        <CardStyled className='mb-3'>
            <CardBodyStyled>
                <FormGroupStyled>
                    <SpanStyled>
                        {denomination >= 1 
                            ? denomination.toLocaleString()
                            :  denomination.toFixed(2)
                        }
                    </SpanStyled> 
                    <SpanX> x </SpanX>
                    <FormControl
                        type='number'
                        min={0}
                        value={quantity}
                        placeholder=''
                        onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
                    />
                </FormGroupStyled>
            </CardBodyStyled>
        </CardStyled>
    );
};

export default BillInput;
