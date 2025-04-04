/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

interface DateTimePickerProps {
  value?: Date | null
  onChange: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  min?: Date
  max?: Date
}

export default function DateTimePicker({
  value,
  onChange,
  placeholder = 'YYYY.MM.DD / HH:MM',
  disabled = false,
  min,
  max,
}: DateTimePickerProps) {
  const [open, setOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState<{
    hour: string
    minute: string
  }>({
    hour: value ? format(value, 'HH') : '00',
    minute: value ? format(value, 'mm') : '00',
  })

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return
    const updated = new Date(date)
    updated.setHours(Number(selectedTime.hour))
    updated.setMinutes(Number(selectedTime.minute))
    onChange(updated)
    setOpen(false)
  }

  const handleTimeChange = (type: 'hour' | 'minute', value: string) => {
    const newTime = { ...selectedTime, [type]: value }
    setSelectedTime(newTime)
    if (value && onChange) {
      const newDate = value
        ? typeof value === 'string'
          ? new Date(value)
          : new Date()
        : new Date()
      if (type === 'hour') newDate.setHours(Number(value))
      else newDate.setMinutes(Number(value))
      onChange(newDate)
    }
  }

  return (
    <Wrapper>
      <InputBox
        onClick={() => !disabled && setOpen(prev => !prev)}
        disabled={disabled}
      >
        <InputText disabled={disabled} active={!!value}>
          {value ? format(value, 'yyyy.MM.dd / HH:mm') : placeholder}
        </InputText>
        <Icon src={'/icons/icon-calendar-20.svg'} alt="calendar" />
      </InputBox>

      {open && !disabled && (
        <Popover>
          <DayPicker
            mode="single"
            selected={value ?? undefined}
            onSelect={handleDateChange}
            disabled={disabled}
            fromDate={min}
            toDate={max}
          />
          <TimeSelectBox>
            <select
              value={selectedTime.hour}
              onChange={e => handleTimeChange('hour', e.target.value)}
            >
              {[...Array(24)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
              ))}
            </select>
            <span>:</span>
            <select
              value={selectedTime.minute}
              onChange={e => handleTimeChange('minute', e.target.value)}
            >
              {[...Array(60)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
              ))}
            </select>
          </TimeSelectBox>
        </Popover>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const InputBox = styled.button<{ disabled: boolean }>`
  display: flex;
  width: 180px;
  height: 32px;
  padding: 6px 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 1px solid ${colors.gray3};
  background-color: ${colors.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const InputText = styled.span<{ disabled: boolean; active: boolean }>`
  color: ${({ active }) => (active ? 'rgb(51, 51, 51)' : colors.gray3)};
  font-feature-settings:
    'case' on,
    'ss02' on;
  font-family: ${typography.fontFamily};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.12px;
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const Popover = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid ${colors.gray3};
  border-radius: 8px;
  padding: 10px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .rdp {
    --rdp-cell-size: 32px;
  }

  .rdp-day_selected {
    background-color: ${colors.primary};
    color: white;
  }
  .rdp-day_today:not(.rdp-day_selected) {
    border: 1px solid ${colors.primary};
  }
`

const TimeSelectBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  select {
    font-size: 14px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid ${colors.gray3};
    background-color: ${colors.white};
    font-family: ${typography.fontFamily};
  }
`
