import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('muestra el año actual correctamente', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(`© ${currentYear} Designed and developed by Ismael Marot`, 'i'))).toBeInTheDocument();
    });

    it('abre LegalModal al hacer clic en "Legal"', () => {
        render(<Footer />);
        const legalButton = screen.getByText(/Legal/i);
        fireEvent.click(legalButton);
        expect(screen.getByText(/Legal/i)).toBeInTheDocument();
    });

    it('abre TermsModal al hacer clic en "Terms of Use"', () => {
        render(<Footer />);
        const termsButton = screen.getByText(/Terms of Use/i);
        fireEvent.click(termsButton);
        expect(screen.getByText(/Terms of Use/i)).toBeInTheDocument();
    });
});