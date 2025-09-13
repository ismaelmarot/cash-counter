import type { FC } from 'react';
import { Form, Card } from 'react-bootstrap';
import type { BillInputProps } from '../../interface/BillInput.interface';
import { CardBodyStyled, CardStyled, FormGroupStyled, SpanStyled } from './BillInput.styled';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    return (
        <CardStyled className='mb-3'>
            <CardBodyStyled>
                <FormGroupStyled>
                    <SpanStyled>
                        {denomination >= 1 
                            ? `$ ${denomination.toLocaleString()}`
                            : `$ ${denomination.toFixed(2)}`}
                    </SpanStyled>
                    
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 10px' }}>x</span>

                    <Form.Control
                        type='number'
                        min={0}
                        value={quantity}
                        placeholder=''
                        onChange={(e) => onChange(e.target.value)}
                        style={{ fontSize: '1.5rem', textAlign: 'right', maxWidth: '150px' }}
                    />
                </FormGroupStyled>
            </CardBodyStyled>
        </CardStyled>
    );
};

export default BillInput;
