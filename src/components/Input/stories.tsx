import { Story, Meta } from '@storybook/react/types-6-0'

// components JSX
import Input from '.'

// types and interfaces
import { InputProps } from './types'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
