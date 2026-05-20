export const add = (a, b) => a + b
export const subtract = (a, b) => a - b
export const multiply = (a, b) => a * b
export const divide = (a, b) => a / b

export const calculate = (a, b, operation) => {
  const ops = { '+': add, '-': subtract, '*': multiply, '/': divide }
  return ops[operation] ? ops[operation](a, b) : b
}
