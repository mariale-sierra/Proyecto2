import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['number', 'operator', 'clear', 'equals', 'function'],
    },
  },
}

export const Number = { args: { label: '5', variant: 'number' } }
export const Operator = { args: { label: '+', variant: 'operator' } }
export const Clear = { args: { label: 'AC', variant: 'clear' } }
export const Equals = { args: { label: '=', variant: 'equals' } }
export const Function = { args: { label: '+/-', variant: 'function' } }
