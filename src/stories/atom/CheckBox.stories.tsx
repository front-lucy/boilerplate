import CheckBox from '@/components/atom/CheckBox'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckBox> = {
  title: 'Atom/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked!' },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

// ✅ 기본 체크박스
export const Checked: Story = {
  args: {
    text: '체크박스',
    checked: true,
    onClick: () => {},
  },
}

export const Unchecked: Story = {
  args: {
    text: '체크박스 해제',
    checked: false,
    onClick: () => {},
  },
}

// ✅ 비활성화 상태
export const DisabledUnchecked: Story = {
  args: {
    text: '비활성화',
    checked: false,
    disabled: true,
    onClick: () => {},
  },
}

export const DisabledChecked: Story = {
  args: {
    text: '비활성 + 체크됨',
    checked: true,
    disabled: true,
    onClick: () => {},
  },
}

// ✅ 인디케이터(체크 일부 상태)
export const Indeterminate: Story = {
  args: {
    text: '일부 선택됨',
    checked: true,
    indeterminate: true,
    onClick: () => {},
  },
}

// ✅ 아이콘만 있는 상태 (text 없음)
export const IconOnly: Story = {
  args: {
    checked: true,
    onClick: () => {},
  },
}

// ✅ 폰트 사이즈 테스트
export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <CheckBox {...args} text="P6 크기" size="p6" />
      <CheckBox {...args} text="P5 크기" size="p5" />
    </div>
  ),
  args: {
    checked: true,
    onClick: () => {},
  },
}
