import Chip from '@/components/atom/Chip'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Chip> = {
  title: 'Atom/Chip',
  component: Chip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Chip>
// ✅ 기본 사용 (toggle 가능)
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Chip
        text="Default Chip"
        checked={checked}
        onClick={() => setChecked(prev => !prev)}
      />
    )
  },
}

// ✅ 항상 체크된 상태
export const Checked: Story = {
  args: {
    text: 'Checked Chip',
    checked: true,
    onClick: () => {},
  },
}

// ✅ 미선택 상태
export const Unchecked: Story = {
  args: {
    text: 'Unchecked Chip',
    checked: false,
    onClick: () => {},
  },
}
