import IconButton from '@/components/atom/IconButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconButton> = {
  title: 'Atom/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    icon: {
      control: 'text',
      description: '아이콘 이미지 경로 (img src)',
    },
    size: {
      control: 'number',
      defaultValue: 16,
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: '/icons/icon-calendar-20.svg',
  },
}

export const Large: Story = {
  args: {
    icon: '/icons/icon-calendar-20.svg',
    size: 24,
  },
}

export const Disabled: Story = {
  args: {
    icon: '/icons/icon-calendar-20.svg',
    disabled: true,
  },
}
