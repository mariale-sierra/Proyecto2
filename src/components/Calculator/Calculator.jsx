import Display from '../Display'
import Keyboard from '../Keyboard'
import useCalculator from '../../hooks/useCalculator'
import styles from './Calculator.module.css'

const Calculator = () => {
  const { display, clear, inputDigit, inputDecimal, toggleSign, performOperation, equals } = useCalculator()

  return (
    <div className={styles.calculator}>
      <Display value={display} />
      <Keyboard
        onDigit={inputDigit}
        onOperator={performOperation}
        onClear={clear}
        onEquals={equals}
        onDecimal={inputDecimal}
        onToggleSign={toggleSign}
      />
    </div>
  )
}

export default Calculator
