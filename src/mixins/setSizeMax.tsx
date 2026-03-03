import type { SizeValue } from '../types/sizeValue.type'
import { formatSize } from '.'

export function sizeMax(
    maxWidth?: SizeValue,
    maxHeight?: SizeValue
): string {
    return `
        max-width: ${maxWidth ? formatSize(maxWidth) : 'none'};
        max-height: ${maxHeight ? formatSize(maxHeight) : 'none'};
    ;`
}