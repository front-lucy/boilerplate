/** @jsxImportSource @emotion/react */

import { colors } from '@/tokens/colors'
import { ThemeProvider, createTheme } from '@mui/material'
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { Fragment } from 'react'
import Icon from './Icon'

interface DatePickerFieldProps {
  date: string
  setDate: (date: string) => void
  customWidth?: number
  fullWidth?: boolean
  disabledStatus?: boolean
  mode?: 'date' | 'datetime'
}

export default function DatePickerField({
  date,
  setDate,
  customWidth,
  fullWidth = false,
  disabledStatus = false,
  mode = 'date',
}: DatePickerFieldProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary, // 적용: Jaedam의 primary color 사용
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            width: fullWidth ? '100%' : customWidth || 'auto',
            height: '32px',
          },
        },
      },
    },
  })

  const pickerProps = {
    disabled: disabledStatus,
    value: dayjs(date),
    maxDate: dayjs('2037-12-31'),
    onChange: (newDate: any) => {
      if (newDate) {
        setDate(
          mode === 'datetime'
            ? dayjs(newDate).format('YYYY-MM-DDTHH:mm')
            : dayjs(newDate).format('YYYY-MM-DD'),
        )
      }
    },
    sx: {
      '& .MuiOutlinedInput-input': {
        color: disabledStatus ? '#666666' : '#333333',
        fontSize: 12,
        fontWeight: 400,
        whiteSpace: 'pre-line',
      },
      '& .MuiInputLabel-root': {
        top: -5,
        color: '#CCCCCC',
        fontSize: 12,
        fontWeight: 400,
      },
      '& .MuiInputLabel-outlined.Mui-focused': {
        color: '#333333',
      },
      '& .MuiOutlinedInput-input::placeholder': {
        color: '#CCCCCC',
        fontWeight: 400,
        opacity: 1,
      },
      '& fieldset': {
        borderColor: '#CCCCCC',
        borderWidth: 1,
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#999999',
        borderWidth: 1,
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        color: '#FAFAFA',
        borderColor: '#666666',
        borderWidth: 1,
      },
      '& .MuiInputLabel-root.Mui-disabled': {
        color: '#666666',
        backgroundColor: '#EEEEEE',
      },
      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
        {
          borderColor: '#666666',
          border: '1px solid #CCCCCC',
        },
      '& .MuiOutlinedInput-input.Mui-disabled': {
        color: '#666666',
        WebkitTextFillColor: 'unset',
      },
      '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#666666',
        border: '1px solid #CCCCCC',
      },
    },
    slots: {
      openPickerIcon: () => (
        <div style={{ minWidth: 20 }}>
          <Icon src="/icons/icon-calendar-20.svg" size={20} />
        </div>
      ),
    },
  }

  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <ThemeProvider theme={theme}>
          {mode === 'datetime' ? (
            <DateTimePicker
              {...pickerProps}
              ampm={false}
              format="YYYY.MM.DD HH:mm"
              timeSteps={{ minutes: 1 }}
            />
          ) : (
            <DatePicker {...pickerProps} format="YYYY.MM.DD" />
          )}
        </ThemeProvider>
      </LocalizationProvider>
    </Fragment>
  )
}
