import { Story, Meta } from '@storybook/react/types-6-0'

// components JSX
import Switch from '.'

// types and interfaces
import { CheckboxProps } from './types'

export default {
  title: 'Switch',
  component: Switch
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Switch {...args} />
