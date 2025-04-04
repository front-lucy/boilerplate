import Icon from '@/components/atom/Icon'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
  title: 'Atom/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    src: '/icons/icon-calendar-20.svg',
    size: 16,
    alt: '아이콘',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {}

export const Large: Story = {
  args: {
    size: 24,
  },
}

export const Small: Story = {
  args: {
    size: 12,
  },
}

export const CloseIcon: Story = {
  args: {
    src: '/icons/icon-calendar-20.svg',
  },
}
