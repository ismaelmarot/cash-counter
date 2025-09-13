import { render, screen, fireEvent } from '@testing-library/react';
import TermsModal from '../TermsModal/TermsModal';
import { describe, it, vi, expect } from 'vitest';

describe("TermsModal - sin verificar 'Términos de uso'", () => {
    it("no se muestra cuando show es false", () => {
        render(<TermsModal show={false} onClose={() => {}} />);
        const modal = screen.queryByRole("dialog");
        expect(modal).not.toBeInTheDocument();
    });

    it("llama a onClose al hacer clic en el botón Cerrar", () => {
        const handleClose = vi.fn();
        render(<TermsModal show={true} onClose={handleClose} />);
        const closeButton = screen.getByRole("button", { name: /cerrar/i });
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
