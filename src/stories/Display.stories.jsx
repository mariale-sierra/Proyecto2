import Display from '../components/Display'

export default {
  title: 'Components/Display',
  component: Display,
  parameters: { layout: 'centered' },
}

export const Empty = { args: { value: '0' } }
export const NumberValue = { args: { value: '12345' } }
export const DecimalValue = { args: { value: '3.14159' } }
export const NegativeValue = { args: { value: '-42' } }
export const MaxLength = { args: { value: '123456789' } }
export const Error = { args: { value: 'ERROR' } }
