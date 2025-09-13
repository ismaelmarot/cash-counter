/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import BillInput from './BillInput';
import { describe, it, vi, expect } from 'vitest';

describe('BillInput Component', () => {
  it('renders the denomination and "x"', () => {
    render(<BillInput denomination={20000} quantity="" onChange={() => {}} />);

    const denominationSpan = screen.getByText((content) =>
      content.replace(/\s|,/g, '').includes('20000')
    );
    expect(denominationSpan).toBeInTheDocument();

    const xSpan = screen.getByText('x');
    expect(xSpan).toBeInTheDocument();
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
