import { useState, useMemo } from 'react'
import { DENOMINATIONS } from '../../constants'

export function useCashCounter() {
    const [quantities,  setQuantities] = useState<number[]>(
        DENOMINATIONS.map(() => 0)
    )

    const updateQuantity = (index: number, value: number) => {
        setQuantities( prev => {
            const copy = [...prev]
            copy[index] = value
            return copy
        })   
    }

    const total = useMemo(() => {
        return quantities.reduce(
            (acc, quantity, i) => acc + quantity * DENOMINATIONS[i],
            0
        )
    }, [quantities])

    return {
        quantities,
        updateQuantity,
        total
    }
}