/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import Totals from './Totals';
import { describe, it, expect } from 'vitest';

describe('Totals Component', () => {
    it('renders the Total label', () => {
        render(<Totals quantities={[]} denominations={[]} />);
        const totalLabel = screen.getByText(/Total/);
        expect(totalLabel).toBeInTheDocument();
    });

    it('calculates and displays the correct total', () => {
        const quantities = ['2', '1', '5'];
        const denominations = [20000, 10000, 2000];

        render(<Totals quantities={quantities} denominations={denominations} />);

        const totalSpan = screen.getByText((content) => {
        const cleaned = content.replace(/\./g, '').replace(',', '.');
        return cleaned.includes('60000');
        });

        expect(totalSpan).toBeInTheDocument();
    });

    it('handles empty or invalid quantities gracefully', () => {
        const quantities = ['', 'abc', undefined as any];
        const denominations = [20000, 10000, 2000];

        render(<Totals quantities={quantities} denominations={denominations} />);

        const totalSpan = screen.getByText((content) => {
        const cleaned = content.replace(/\./g, '').replace(',', '.');
        return cleaned.includes('0');
        });

        expect(totalSpan).toBeInTheDocument();
    });
});
