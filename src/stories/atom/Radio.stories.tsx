import Radio from '@/components/atom/Radio'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'Atom/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked!' },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

// ✅ 선택된 상태
export const Checked: Story = {
  args: {
    text: '선택됨',
    checked: true,
    onClick: () => {},
  },
}

// ✅ 선택되지 않은 상태
export const Unchecked: Story = {
  args: {
    text: '선택 안됨',
    checked: false,
    onClick: () => {},
  },
}

// ✅ 비활성화 + 선택 안됨
export const DisabledUnchecked: Story = {
  args: {
    text: '비활성 상태',
    checked: false,
    disabled: true,
    onClick: () => {},
  },
}

// ✅ 비활성화 + 선택됨
export const DisabledChecked: Story = {
  args: {
    text: '비활성 선택됨',
    checked: true,
    disabled: true,
    onClick: () => {},
  },
}

// ✅ 다양한 텍스트 크기 적용 테스트
export const AllSizes: Story = {
  render: args => {
    const sizes = [
      'p1',
      'p2',
      'p3',
      'p4',
      'p5',
      'p6',
      'caption1',
      'caption2',
    ] as const
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sizes.map(size => (
          <Radio key={size} {...args} size={size} text={`Size: ${size}`} />
        ))}
      </div>
    )
  },
  args: {
    checked: true,
    onClick: () => {},
  },
}
