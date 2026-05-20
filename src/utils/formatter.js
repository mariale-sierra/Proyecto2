const MAX_LENGTH = 9

export const formatDisplay = (value) => {
  if (value === 'ERROR') return 'ERROR'
  const str = String(value)
  if (str.length <= MAX_LENGTH) return str
  if (str.includes('.')) {
    const [int, dec] = str.split('.')
    const availableDecimals = MAX_LENGTH - int.length - 1
    if (availableDecimals > 0) return `${int}.${dec.slice(0, availableDecimals)}`
  }
  return 'ERROR'
}

export const isOverflow = (value) => {
  if (value === 'ERROR') return true
  const num = parseFloat(value)
  return num > 999999999 || num < 0
}

export const canAppend = (current, char) => {
  const newValue = current === '0' && char !== '.' ? char : current + char
  return newValue.replace('-', '').length <= MAX_LENGTH
}
