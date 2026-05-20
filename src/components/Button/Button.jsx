import styles from './Button.module.css'

const Button = ({ label, onClick, variant = 'number' }) => (
  <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
    {label}
  </button>
)

export default Button
