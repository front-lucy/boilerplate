import Toggle from '@/components/atom/Toggle'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Toggle> = {
  title: 'Atom/Toggle',
  component: Toggle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

// ✅ 기본 토글 (interactive)
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Toggle checked={checked} onClick={() => setChecked(prev => !prev)} />
    )
  },
}

// ✅ 켜진 상태
export const Checked: Story = {
  args: {
    checked: true,
    onClick: () => {},
  },
}

// ✅ 꺼진 상태
export const Unchecked: Story = {
  args: {
    checked: false,
    onClick: () => {},
  },
}

// ✅ 비활성화된 상태
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    onClick: () => {},
  },
}

// ✅ 체크 + 비활성화 상태
export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    onClick: () => {},
  },
}
