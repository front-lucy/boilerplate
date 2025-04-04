import Button from '@/components/atom/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Atom/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked!' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// 기본 Primary 버튼
export const Primary: Story = {
  args: {
    text: 'Primary',
    color: 'Primary',
    size: 'medium',
  },
}

// Secondary 스타일
export const Secondary: Story = {
  args: {
    text: 'Secondary',
    color: 'Secondary',
    size: 'medium',
  },
}

// Solid 스타일
export const Solid: Story = {
  args: {
    text: 'Solid',
    color: 'Solid',
    size: 'medium',
  },
}
// Line 스타일
export const Line: Story = {
  args: {
    text: 'Line',
    color: 'Line',
    size: 'medium',
  },
}

// Text 스타일
export const Text: Story = {
  args: {
    text: 'Text',
    color: 'Text',
    size: 'medium',
  },
}

// 비활성화된 버튼
export const Disabled: Story = {
  args: {
    text: 'Disabled',
    color: 'Primary',
    disabled: true,
  },
}

// 전체 너비 버튼
export const FullWidth: Story = {
  args: {
    text: 'Full Width',
    color: 'Primary',
    fullWidth: true,
  },
}

// 커스텀 사이즈 버튼
export const CustomSize: Story = {
  args: {
    text: 'Custom Size',
    color: 'Primary',
    customWidth: 300,
    customHeight: 48,
  },
}

// 패딩 없는 버튼
export const NoPadding: Story = {
  args: {
    text: 'No Padding',
    color: 'Line',
    noPadding: true,
  },
}

// 모든 사이즈 변형
export const CenteredSecondary: Story = {
  render: args => (
    <div>
      <Button {...args} />
    </div>
  ),
  args: {
    text: 'Centered Secondary',
    color: 'Secondary',
    size: 'large',
  },
}
