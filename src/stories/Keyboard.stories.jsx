import Keyboard from '../components/Keyboard'

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
  parameters: { layout: 'centered' },
}

export const Default = {
  args: {
    onDigit: (d) => console.log('Digit:', d),
    onOperator: (o) => console.log('Operator:', o),
    onClear: () => console.log('Clear'),
    onEquals: () => console.log('Equals'),
    onDecimal: () => console.log('Decimal'),
    onToggleSign: () => console.log('Toggle sign'),
  },
}
