/// <reference types="vitest" />

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import { BillInput } from './BillInput'

describe('BillInput Component', () => {
  it('renders the denomination and "x"', () => {
    render(
      <BillInput
        denomination={20000}
        quantity={0}
        onChange={() => {}}
      />
    )

    expect(screen.getByText('x')).toBeInTheDocument()
    expect(screen.getByText('20.000')).toBeInTheDocument()
  })

  it('calls onChange when selecting a value', () => {
    const handleChange = vi.fn()

    render(
      <BillInput
        denomination={20000}
        quantity={0}
        onChange={handleChange}
      />
    )

    // Abrir el NumberPicker
    fireEvent.click(screen.getByText('0'))

    // Elegir el número 3
    fireEvent.click(screen.getByRole('button', { name: '3' }))

    // Confirmar
    fireEvent.click(screen.getByRole('button', { name: 'OK' }))

    expect(handleChange).toHaveBeenCalledWith(3)
  })

  it('shows the initial quantity', () => {
    render(
      <BillInput
        denomination={20000}
        quantity={5}
        onChange={() => {}}
      />
    )

    expect(screen.getByText('5')).toBeInTheDocument()
  })
})