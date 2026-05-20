import Button from '../Button'
import Row from '../Row'
import styles from './Keyboard.module.css'

const Keyboard = ({ onDigit, onOperator, onClear, onEquals, onDecimal, onToggleSign }) => (
  <div className={styles.keyboard}>
    <Row>
      <Button label="AC" onClick={onClear} variant="clear" />
      <Button label="+/-" onClick={onToggleSign} variant="function" />
      <Button label="÷" onClick={() => onOperator('/')} variant="operator" />
    </Row>
    <Row>
      <Button label="7" onClick={() => onDigit('7')} />
      <Button label="8" onClick={() => onDigit('8')} />
      <Button label="9" onClick={() => onDigit('9')} />
      <Button label="×" onClick={() => onOperator('*')} variant="operator" />
    </Row>
    <Row>
      <Button label="4" onClick={() => onDigit('4')} />
      <Button label="5" onClick={() => onDigit('5')} />
      <Button label="6" onClick={() => onDigit('6')} />
      <Button label="-" onClick={() => onOperator('-')} variant="operator" />
    </Row>
    <Row>
      <Button label="1" onClick={() => onDigit('1')} />
      <Button label="2" onClick={() => onDigit('2')} />
      <Button label="3" onClick={() => onDigit('3')} />
      <Button label="+" onClick={() => onOperator('+')} variant="operator" />
    </Row>
    <Row>
      <Button label="0" onClick={() => onDigit('0')} />
      <Button label="." onClick={onDecimal} />
      <Button label="C" onClick={onClear} variant="function" />
      <Button label="=" onClick={onEquals} variant="equals" />
    </Row>
  </div>
)

export default Keyboard
