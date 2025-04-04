/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

interface IconProps {
  src: string
  size?: number
  alt?: string
  disabled?: boolean
}

export default function Icon({
  src,
  size = 16,
  alt = '',
  disabled = false,
}: IconProps) {
  return <StyledIcon src={src} alt={alt} size={size} disabled={disabled} />
}

const StyledIcon = styled.img<{ size: number; disabled: boolean }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  filter: ${({ disabled }) =>
    disabled ? 'grayscale(100%) brightness(0.8)' : 'none'};
  display: inline-block;
`
