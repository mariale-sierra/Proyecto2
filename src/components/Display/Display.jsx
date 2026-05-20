import styles from './Display.module.css'

const Display = ({ value }) => (
  <div className={styles.display}>
    <span className={styles.value}>{value}</span>
  </div>
)

export default Display
