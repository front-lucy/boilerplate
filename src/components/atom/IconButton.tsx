/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import Icon from './Icon' // ← 이 부분만 바뀜

interface IconButtonProps {
  icon: string
  onClick: () => void
  size?: number
  disabled?: boolean
  alt?: string
}

export default function IconButton({
  icon,
  onClick,
  size = 16,
  disabled = false,
  alt = 'icon',
}: IconButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <Icon src={icon} alt={alt} size={size} disabled={disabled} />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button<{ disabled: boolean }>`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`
