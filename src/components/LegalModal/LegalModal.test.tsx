import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LegalModal from './LegalModal';
import * as helper from '../../helpers/getCurrentYear';

vi.spyOn(helper, 'getCurrentYear').mockReturnValue(2025);

describe('LegalModal', () => {
    it('muestra el modal con contenido cuando show es true', () => {
        render(<LegalModal show={true} onClose={() => {}} />);

        expect(screen.getByText('Legal')).toBeInTheDocument();
        expect(screen.getByText(/Este sitio y la aplicación/)).toBeInTheDocument();
        expect(screen.getByText('Última actualización: 2025')).toBeInTheDocument();
        expect(screen.getByText('Cerrar')).toBeInTheDocument();
    });

    it('no renderiza el modal cuando show es false', () => {
        render(<LegalModal show={false} onClose={() => {}} />);
        expect(screen.queryByText('Legal')).toBeNull();
    });

    it('llama a onClose al hacer clic en "Cerrar"', () => {
        const onClose = vi.fn();
        render(<LegalModal show={true} onClose={onClose} />);
        fireEvent.click(screen.getByText('Cerrar'));
        expect(onClose).toHaveBeenCalled();
    });
});