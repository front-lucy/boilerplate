/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'
import styled from '@emotion/styled'
import checkIcon from '/icons/icon-checkbox-check.svg'
import disabledIcon from '/icons/icon-checkbox-disabled.svg'
import indeterminateIcon from '/icons/icon-checkbox-indeterminate.svg'
import unCheckIcon from '/icons/icon-checkbox-unCheck.svg'

interface CheckBoxProps {
  text?: string
  checked: boolean
  indeterminate?: boolean
  onClick: () => void
  disabled?: boolean
  size?: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'caption1' | 'caption2'
}

export default function CheckBox({
  text,
  checked,
  indeterminate = false,
  onClick,
  disabled = false,
  size = 'p6',
}: CheckBoxProps) {
  const getIcon = () => {
    if (disabled) return disabledIcon
    if (indeterminate) return indeterminateIcon
    if (checked) return checkIcon
    return unCheckIcon
  }

  return (
    <Wrapper
      onClick={() => !disabled && onClick()}
      hasText={!!text}
      disabled={disabled}
    >
      <Icon src={getIcon()} alt="checkbox" />
      {text && (
        <Label
          size={size}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate}
        >
          {text}
        </Label>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hasText: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ hasText }) => (hasText ? 'flex-start' : 'center')};
  gap: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`

const Label = styled.span<{
  size: keyof typeof typography.paragraphs | keyof typeof typography.captions
  disabled: boolean
  checked: boolean
  indeterminate: boolean
}>`
  ${({ size }) => {
    const style =
      typography.paragraphs[size as keyof typeof typography.paragraphs] ??
      typography.paragraphs.p6

    return `
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      letter-spacing: ${style.letterSpacing};
    `
  }};

  color: ${({ disabled, checked, indeterminate }) => {
    if (disabled) return colors.gray2
    if (checked || indeterminate) return colors.gray5
    return colors.gray4
  }};

  font-family: ${typography.fontFamily};
  display: inline-block;
`
