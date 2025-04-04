/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import styled from '@emotion/styled'
import { useState } from 'react'

export interface CustomButtonProps {
  text: React.ReactNode
  onClick: () => void
  disabled?: boolean
  fullWidth?: boolean
  size?: SizeKey
  color?: VariantKey
  customWidth?: number
  customHeight?: number
  noPadding?: boolean
}

type VariantKey = 'Primary' | 'Secondary' | 'Solid' | 'Line' | 'Text'
type SizeKey = 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall' | 'tiny'

type ButtonVisualState = {
  bg?: string
  color?: string
  border?: string
}

type ButtonVariantStyle = {
  default: ButtonVisualState
  hover?: ButtonVisualState
  pressed?: ButtonVisualState
  disabled?: ButtonVisualState
}

const sizeStyles: Record<SizeKey, { padding: string; fontSize: number }> = {
  xLarge: { padding: '11px 16px 12px 16px', fontSize: 18 },
  large: { padding: '9px 16px 10px 16px', fontSize: 18 },
  medium: { padding: '9px 16px', fontSize: 16 },
  small: { padding: '8px 16px', fontSize: 14 },
  xSmall: { padding: '6px 16px', fontSize: 14 },
  tiny: { padding: '3px 8px', fontSize: 12 },
}

const variantStyleMap: Record<VariantKey, ButtonVariantStyle> = {
  Primary: {
    default: { bg: colors.primary, color: colors.white },
    hover: { bg: colors.primary60, color: colors.white },
    pressed: { bg: colors.primary_black10, color: colors.white },
    disabled: { bg: colors.gray2, color: colors.gray3 },
  },
  Secondary: {
    default: {
      bg: 'transparent',
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
    hover: { bg: colors.primary50, color: colors.primary80 },
    pressed: {
      bg: 'transparent',
      color: colors.primary,
      border: `1px solid ${colors.primary_black10}`,
    },
    disabled: { color: colors.gray2, border: `1px solid ${colors.gray3}` },
  },
  Solid: {
    default: { bg: colors.gray2, color: colors.gray6 },
    hover: { bg: colors.gray2, color: colors.gray5 },
    pressed: { bg: colors.gray3, color: colors.gray6 },
    disabled: { bg: colors.gray2, color: colors.gray3 },
  },
  Line: {
    default: {
      bg: 'transparent',
      color: colors.gray5,
      border: `1px solid ${colors.gray3}`,
    },
    hover: {
      bg: 'transparent',
      color: colors.gray6,
      border: `1px solid ${colors.gray2}`,
    },
    pressed: {
      bg: 'transparent',
      color: colors.gray5,
      border: `1px solid ${colors.gray6}`,
    },
    disabled: { color: colors.gray3, border: `1px solid ${colors.gray3}` },
  },
  Text: {
    default: { bg: 'transparent', color: colors.gray5 },
    hover: { bg: colors.gray2, color: colors.gray5 },
    pressed: { bg: colors.gray3, color: colors.gray5 },
    disabled: { bg: 'transparent', color: colors.gray3 },
  },
}

export default function Button({
  text,
  onClick,
  disabled = false,
  fullWidth,
  size = 'xSmall',
  color = 'Primary',
  customWidth,
  customHeight,
  noPadding,
}: CustomButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    if (!disabled) onClick()
  }

  return (
    <StyledButton
      variant={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      customWidth={customWidth}
      customHeight={customHeight}
      noPadding={noPadding}
      isPressed={isPressed}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={handleClick}
    >
      <span>{text}</span>
    </StyledButton>
  )
}

const StyledButton = styled.button<{
  variant: VariantKey
  size: SizeKey
  disabled: boolean
  fullWidth?: boolean
  customWidth?: number
  customHeight?: number
  noPadding?: boolean
  isPressed?: boolean
}>(
  ({
    variant,
    size,
    disabled,
    fullWidth,
    customWidth,
    customHeight,
    noPadding,
    isPressed,
  }) => {
    const style = variantStyleMap[variant]
    const sizeStyle = sizeStyles[size]

    const currentState = disabled
      ? style.disabled
      : isPressed
        ? style.pressed
        : style.default

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      fontWeight: 400,
      whiteSpace: 'nowrap',
      gap: 4,
      cursor: disabled ? 'not-allowed' : 'pointer',
      backgroundColor: currentState?.bg,
      color: currentState?.color,
      border: currentState?.border ?? 'unset',
      fontSize: sizeStyle.fontSize,
      padding: noPadding ? 0 : sizeStyle.padding,
      width: fullWidth ? '100%' : (customWidth ?? 'auto'),
      height: customHeight ?? 'auto',
      transition: 'all 0.2s ease',
      '&:hover': disabled
        ? undefined
        : {
            backgroundColor: style.hover?.bg,
            color: style.hover?.color,
            border: style.hover?.border,
          },
      '&:active': disabled
        ? undefined
        : {
            backgroundColor: style.pressed?.bg,
            color: style.pressed?.color,
            border: style.pressed?.border,
          },
    }
  },
)
