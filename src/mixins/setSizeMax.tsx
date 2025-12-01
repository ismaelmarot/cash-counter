import type { SizeValue } from '../types/sizeValue.type';

export function formatSize(value: SizeValue): string {
    if (typeof value === 'number') {
        return `${value}px`;
    }
    return value;
}

export function sizeMax(maxWidth?: SizeValue, maxHeight?: SizeValue): string {
    return `
        max-width: ${maxWidth ? formatSize(maxWidth) : 'none'};
        max-height: ${maxHeight ? formatSize(maxHeight) : 'none'};
    ;`
}
