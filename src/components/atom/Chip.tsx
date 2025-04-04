/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'
import styled from '@emotion/styled'

interface ChipProps {
  text: string
  checked: boolean
  onClick: () => void
}

export default function Chip({ text, checked, onClick }: ChipProps) {
  return (
    <ChipWrapper checked={checked} onClick={onClick}>
      <Label checked={checked}>{text}</Label>
    </ChipWrapper>
  )
}

const ChipWrapper = styled.div<{ checked: boolean }>`
  padding: 7px 9px;
  background-color: ${({ checked }) =>
    checked ? colors.primary10 : '#F3F3F3'};
  border: ${({ checked }) =>
    checked ? `1px solid ${colors.primary30}` : '1px solid transparent'};
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;
`

const Label = styled.span<{ checked: boolean }>`
  font-size: ${typography.paragraphs.p7.fontSize};
  font-weight: ${typography.paragraphs.p7.fontWeight};
  line-height: ${typography.paragraphs.p7.lineHeight};
  letter-spacing: ${typography.paragraphs.p7.letterSpacing};
  color: ${({ checked }) => (checked ? colors.primary : colors.gray4)};
  font-family: ${typography.fontFamily};
  white-space: nowrap;
`
