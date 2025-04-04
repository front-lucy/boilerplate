import DatePickerField from '@/components/atom/DatePickerField'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof DatePickerField> = {
  title: 'Atom/DatePickerField',
  component: DatePickerField,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      options: ['date', 'datetime'],
      control: { type: 'radio' },
    },
    fullWidth: { control: 'boolean' },
    disabledStatus: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof DatePickerField>

export const Date: Story = {
  render: args => {
    const [date, setDate] = useState('2025-04-04')
    return (
      <DatePickerField {...args} date={date} setDate={setDate} mode="date" />
    )
  },
}

export const DateTime: Story = {
  render: args => {
    const [date, setDate] = useState('2025-04-04T12:34')
    return (
      <DatePickerField
        {...args}
        date={date}
        setDate={setDate}
        mode="datetime"
      />
    )
  },
}
