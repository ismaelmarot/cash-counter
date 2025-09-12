import { describe, it, expect, vi } from 'vitest';
import { getCurrentYear } from './getCurrentYear';

describe('getCurrentYear', () => {
    it('devuelve el año actual', () => {

        const mockDate = new Date('2025-09-03T00:00:00Z');
        vi.setSystemTime(mockDate);

        expect(getCurrentYear()).toBe(2025);

        vi.useRealTimers();
    });
});