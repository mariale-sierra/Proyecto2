import { useState, useCallback } from 'react'
import { calculate } from '../utils/operations'
import { formatDisplay, isOverflow, canAppend } from '../utils/formatter'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [previous, setPrevious] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const clear = useCallback(() => {
    setDisplay('0')
    setPrevious(null)
    setOperation(null)
    setWaitingForOperand(false)
  }, [])

  const inputDigit = useCallback((digit) => {
    if (display === 'ERROR') return
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else if (canAppend(display, digit)) {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }, [display, waitingForOperand])

  const inputDecimal = useCallback(() => {
    if (display === 'ERROR') return
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.') && canAppend(display, '.')) {
      setDisplay(display + '.')
    }
  }, [display, waitingForOperand])

  const toggleSign = useCallback(() => {
    if (display === 'ERROR' || display === '0') return
    const newValue = display.startsWith('-') ? display.slice(1) : '-' + display
    if (newValue.length <= 9) setDisplay(newValue)
  }, [display])

  const performOperation = useCallback((nextOp) => {
    if (display === 'ERROR') return
    const inputValue = parseFloat(display)
    if (previous === null) {
      setPrevious(inputValue)
    } else if (operation) {
      const result = calculate(previous, inputValue, operation)
      const formatted = formatDisplay(result)
      if (isOverflow(result) || formatted === 'ERROR') {
        setDisplay('ERROR')
        setPrevious(null)
        setOperation(null)
        return
      }
      setDisplay(formatted)
      setPrevious(parseFloat(formatted))
    }
    setOperation(nextOp)
    setWaitingForOperand(true)
  }, [display, previous, operation])

  const equals = useCallback(() => {
    if (display === 'ERROR' || operation === null || previous === null) return
    const inputValue = parseFloat(display)
    const result = calculate(previous, inputValue, operation)
    const formatted = formatDisplay(result)
    if (isOverflow(result) || formatted === 'ERROR') {
      setDisplay('ERROR')
    } else {
      setDisplay(formatted)
    }
    setPrevious(null)
    setOperation(null)
    setWaitingForOperand(true)
  }, [display, previous, operation])

  return { display, clear, inputDigit, inputDecimal, toggleSign, performOperation, equals }
}

export default useCalculator
