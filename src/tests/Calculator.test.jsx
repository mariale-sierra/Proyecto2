import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'

const getDisplay = () => screen.getByRole('region', { hidden: true }) || document.querySelector('._display_b3eb3e span')
const getDisplayValue = () => document.querySelector('[class*="_value_"]')?.textContent

describe('Calculator', () => {
  it('renders display with initial value 0', () => {
    render(<Calculator />)
    expect(getDisplayValue()).toBe('0')
  })

  it('displays number when digit button is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    expect(getDisplayValue()).toBe('5')
  })

  it('concatenates digits correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '2' }))
    fireEvent.click(screen.getByRole('button', { name: '3' }))
    expect(getDisplayValue()).toBe('123')
  })

  it('performs addition correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    fireEvent.click(screen.getByRole('button', { name: '3' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('8')
  })

  it('performs subtraction correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '9' }))
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    fireEvent.click(screen.getByRole('button', { name: '4' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('5')
  })

  it('performs multiplication correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '6' }))
    fireEvent.click(screen.getByRole('button', { name: '×' }))
    fireEvent.click(screen.getByRole('button', { name: '7' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('42')
  })

  it('performs division correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '8' }))
    fireEvent.click(screen.getByRole('button', { name: '÷' }))
    fireEvent.click(screen.getByRole('button', { name: '2' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('4')
  })

  it('handles decimal input correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '3' }))
    fireEvent.click(screen.getByRole('button', { name: '.' }))
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '4' }))
    expect(getDisplayValue()).toBe('3.14')
  })

  it('prevents multiple decimal points', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '.' }))
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '.' }))
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    expect(getDisplayValue()).toBe('1.55')
  })

  it('clears display with AC button', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: 'AC' }))
    expect(getDisplayValue()).toBe('0')
  })

  it('toggles sign with +/- button', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '+/-' }))
    expect(getDisplayValue()).toBe('-5')
  })

  it('respects max 9 character limit', () => {
    render(<Calculator />)
    for (let i = 0; i < 12; i++) {
      fireEvent.click(screen.getByRole('button', { name: '1' }))
    }
    expect(getDisplayValue()).toBe('111111111')
  })

  it('shows ERROR for negative results', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    fireEvent.click(screen.getByRole('button', { name: '9' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('ERROR')
  })

  it('shows ERROR for overflow results', () => {
    render(<Calculator />)
    for (let i = 0; i < 9; i++) {
      fireEvent.click(screen.getByRole('button', { name: '9' }))
    }
    fireEvent.click(screen.getByRole('button', { name: '×' }))
    fireEvent.click(screen.getByRole('button', { name: '2' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('ERROR')
  })

  it('handles sequential operations correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '5' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    fireEvent.click(screen.getByRole('button', { name: '3' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(getDisplayValue()).toBe('8')
    fireEvent.click(screen.getByRole('button', { name: '2' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    expect(getDisplayValue()).toBe('10')
  })

  it('handles division with long decimals', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '÷' }))
    fireEvent.click(screen.getByRole('button', { name: '3' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))
    const displayValue = getDisplayValue()
    expect(displayValue?.length).toBeLessThanOrEqual(9)
    expect(displayValue).toMatch(/0\.333333/)
  })
})
