/// <reference types="vitest" />

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Total } from './Total'

describe('Total Component', () => {
  it('renders the Total label', () => {
    render(<Total total={0} />)

    expect(screen.getByText(/Total/i)).toBeInTheDocument()
  })

  it('displays the formatted total', () => {
    render(<Total total={60000} />)

    expect(screen.getByText('60.000')).toBeInTheDocument()
    expect(screen.getByText(',00')).toBeInTheDocument()
  })

  it('renders zero correctly', () => {
    render(<Total total={0} />)

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText(',00')).toBeInTheDocument()
  })

  it('renders decimal values correctly', () => {
    render(<Total total={1234.5} />)

    expect(screen.getByText('1.234')).toBeInTheDocument()
    expect(screen.getByText(',50')).toBeInTheDocument()
  })
})