/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import BillInput from './BillInput';
import { describe, it, vi } from 'vitest';

describe('BillInput Component', () => {
    it('renders the denomination and "x"', () => {
        render(<BillInput denomination={20000} quantity="" onChange={() => {}} />);
        
        expect(screen.getByText('$ 20,000')).toBeInTheDocument();
        
        expect(screen.getByText('x')).toBeInTheDocument();
    });

    it('calls onChange when typing in the input', () => {
        const handleChange = vi.fn();
        render(<BillInput denomination={20000} quantity="" onChange={handleChange} />);
        
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '3' } });
        
        expect(handleChange).toHaveBeenCalledWith('3');
    });

    it('displays the initial quantity', () => {
        render(<BillInput denomination={20000} quantity="5" onChange={() => {}} />);
        
        const input = screen.getByRole('spinbutton') as HTMLInputElement;
        expect(input.value).toBe('5');
    });
});

function expect(received: any) {
    return {
        toBeInTheDocument() {
            if (!received) {
                throw new Error('Element not found in the document');
            }
        },
        toHaveBeenCalledWith(...args: any[]) {
            if (typeof received !== 'function' || !('mock' in received)) {
                throw new Error('Expected a mock function');
            }
            const calls = received.mock.calls;
            const found = calls.some((call: any[]) =>
                call.length === args.length && call.every((val, idx) => val === args[idx])
            );
            if (!found) {
                throw new Error(`Function was not called with arguments: ${JSON.stringify(args)}`);
            }
        },
        toBe(expected: any) {
            if (received !== expected) {
                throw new Error(`Expected ${received} to be ${expected}`);
            }
        }
    };
}
