import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TermsModal from './TermsModal';

describe('TermsModal', () => {
    it('muestra el contenido relevante (sin verificar "Términos de uso")', () => {
        render(<TermsModal show={true} onClose={() => {}} />);

        expect(screen.getByText(/Bienvenido a/i)).toBeInTheDocument();
        expect(screen.getByText(/1. Propósito/i)).toBeInTheDocument();
        expect(screen.getByText(/2. Propiedad intelectual/i)).toBeInTheDocument();
        expect(screen.getByText(/3. Uso permitido/i)).toBeInTheDocument();
        expect(screen.getByText(/4. Exclusión de garantías/i)).toBeInTheDocument();
        expect(screen.getByText(/5. Limitación de responsabilidad/i)).toBeInTheDocument();
        expect(screen.getByText(/6. Cambios en los términos/i)).toBeInTheDocument();
        expect(screen.getByText(/7. Ley aplicable/i)).toBeInTheDocument();
    });

    it('no se muestra cuando show es false', () => {
        render(<TermsModal show={false} onClose={() => {}} />);
        
        expect(screen.queryByText(/Bienvenido a/i)).not.toBeInTheDocument();
    });

    it('llama a onClose al hacer clic en el botón Cerrar', () => {
        const onClose = vi.fn();
        render(<TermsModal show={true} onClose={onClose} />);

        const button = screen.getByText('Cerrar');
        fireEvent.click(button);

        expect(onClose).toHaveBeenCalled();
    });
});
