/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'
import styled from '@emotion/styled'

interface RadioProps {
  text: string
  checked: boolean
  onClick: () => void
  disabled?: boolean
  size?: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'caption1' | 'caption2'
}

export default function Radio({
  text,
  checked,
  onClick,
  disabled = false,
  size = 'p6',
}: RadioProps) {
  return (
    <Wrapper onClick={() => !disabled && onClick()} disabled={disabled}>
      <RadioCircle checked={checked} disabled={disabled}>
        {checked && <InnerDot disabled={disabled} />}
      </RadioCircle>
      <LabelText size={size} disabled={disabled} checked={checked}>
        {text}
      </LabelText>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const RadioCircle = styled.div<{ checked: boolean; disabled: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: 2px solid
    ${({ checked, disabled }) =>
      disabled ? colors.gray2 : checked ? colors.primary : colors.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerDot = styled.div<{ disabled: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ disabled }) =>
    disabled ? colors.gray2 : colors.primary};
`

const LabelText = styled.span<{
  size: keyof typeof typography.paragraphs | keyof typeof typography.captions
  disabled: boolean
  checked: boolean
}>`
  ${({ size }) => {
    const style =
      typography.paragraphs[size as keyof typeof typography.paragraphs] ||
      typography.paragraphs.p6
    return `
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
        line-height: ${style.lineHeight};
        letter-spacing: ${style.letterSpacing};
      `
  }};

  color: ${({ disabled, checked }) =>
    disabled ? colors.gray2 : checked ? colors.gray4 : colors.gray5};

  font-family: ${typography.fontFamily};
`
