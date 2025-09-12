import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TermsModal from './TermsModal';

describe('TermsModal', () => {
    it('muestra el título y el contenido', () => {
        render(<TermsModal show={true} onClose={() => {}} />);

        expect(screen.getByText('Términos de uso')).toBeInTheDocument();
        expect(screen.getByText(/Bienvenido a/i)).toBeInTheDocument();
        expect(screen.getByText(/1. Propósito/i)).toBeInTheDocument();
    });

    it('no se muestra cuando show es false', () => {
        render(<TermsModal show={false} onClose={() => {}} />);
        expect(screen.queryByText('Términos de uso')).not.toBeInTheDocument();
    });

    it('llama a onClose al hacer clic en el botón Cerrar', () => {
        const onClose = vi.fn();
        render(<TermsModal show={true} onClose={onClose} />);

        const button = screen.getByText('Cerrar');
        fireEvent.click(button);

        expect(onClose).toHaveBeenCalled();
    });
});