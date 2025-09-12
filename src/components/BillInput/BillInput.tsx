import type { FC } from 'react';
import { Form, Card } from 'react-bootstrap';
import type { BillInputProps } from '../interface/BillInput.interface';

const BillInput: FC<BillInputProps> = ({ denomination, quantity, onChange }) => {
    return (
        <Card className='mb-3' style={{
            borderRadius: '8px',
            width: '100%',
            backgroundColor: 'rgb(51,51,51)',
            color: 'white',
        }}>
            <Card.Body style={{width:'100%'}}>
                <Form.Group style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        {denomination >= 1 
                            ? `$ ${denomination.toLocaleString()}`
                            : `$ ${denomination.toFixed(2)}`}
                    </span>
                    
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 10px' }}>x</span>

                    <Form.Control
                        type='number'
                        min={0}
                        value={quantity}
                        placeholder=''
                        onChange={(e) => onChange(e.target.value)}
                        style={{ fontSize: '1.5rem', textAlign: 'right', maxWidth: '150px' }}
                    />
                </Form.Group>
            </Card.Body>
        </Card>
    );
};

export default BillInput;
