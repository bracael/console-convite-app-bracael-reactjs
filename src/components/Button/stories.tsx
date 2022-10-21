import { Story, Meta } from '@storybook/react/types-6-0'

// components JSX
import Button from '.'

// types and interfaces
import type { ButtonProps } from './types'

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.argTypes = {
  value: {
    name: 'Texto'
  },
  variant: {
    name: 'Tipo do botão',
    options: ['normal', 'contained', 'outlined', 'simple'],
    control: { type: 'radio' }
  },
  size: {
    name: 'Tamanho',
    options: ['small', 'normal', 'large'],
    control: { type: 'select' }
  }
}

Default.args = {
  value: 'Lorem Ipsum',
  variant: 'contained',
  size: 'normal'
}
