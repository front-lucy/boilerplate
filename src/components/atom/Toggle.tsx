/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import styled from '@emotion/styled'

interface ToggleProps {
  checked: boolean
  onClick: () => void
  disabled?: boolean
}

export default function Toggle({
  checked,
  onClick,
  disabled = false,
}: ToggleProps) {
  return (
    <ToggleWrapper
      checked={checked}
      disabled={disabled}
      onClick={() => {
        if (!disabled) onClick()
      }}
    >
      <Spacer grow={checked} />
      <Knob checked={checked} disabled={disabled} />
      <Spacer grow={!checked} />
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div<{
  checked: boolean
  disabled: boolean
}>`
  width: 55px;
  height: 28px;
  border-radius: 25px;
  padding: 3px;
  background-color: ${({ checked, disabled }) => {
    if (disabled) return colors.gray2
    return checked ? colors.primary : colors.gray3
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
`

const Knob = styled.div<{
  checked: boolean
  disabled: boolean
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ disabled }) =>
    disabled ? colors.gray1 : colors.white}; // #FAFAFA or #FFFFFF
  transition: all 0.3s ease;
`

const Spacer = styled.div<{ grow: boolean }>`
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  transition: flex-grow 0.3s ease;
`
