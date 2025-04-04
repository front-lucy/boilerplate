/** @jsxImportSource @emotion/react */
import { typography } from '@/tokens/typography'
import { css } from '@emotion/react'
import { Meta } from '@storybook/react'

export default {
  title: 'Design Tokens/TypographyTable',
} as Meta

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  font-family: ${typography.fontFamily};

  th,
  td {
    padding: 12px;
    height: 64px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    vertical-align: middle;
  }

  thead {
    font-size: 14px;
    color: #333;
  }

  tbody tr:hover {
    background-color: #fafafa;
  }

  th {
    font-weight: 600;
  }
`

const TableRow = ({
  label,
  style,
}: {
  label: string
  style: {
    fontSize: string
    lineHeight: string
    fontWeight: string
    letterSpacing: string
  }
}) => (
  <tr>
    <td style={{ fontWeight: 700 }}>{label}</td>
    <td>{style.fontWeight === '700' ? 'bold' : 'regular'}</td>
    <td>{style.fontSize}</td>
    <td>{style.lineHeight}</td>
    <td>{style.letterSpacing}</td>
    <td>
      <span
        style={{
          fontSize: style.fontSize,
          lineHeight: style.lineHeight,
          fontWeight: style.fontWeight,
          letterSpacing: style.letterSpacing,
          fontFamily: typography.fontFamily,
        }}
      >
        Typography Preview
      </span>
    </td>
  </tr>
)

export const TypographyPreviewTable = () => {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          <th>Level</th>
          <th>Weight</th>
          <th>Font Size</th>
          <th>Line Height</th>
          <th>Letter Spacing</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(typography.headings).map(([label, style]) => (
          <TableRow key={label} label={label} style={style} />
        ))}
        {Object.entries(typography.paragraphs).map(([label, style]) => (
          <TableRow key={label} label={label} style={style} />
        ))}
        {Object.entries(typography.captions).map(([label, style]) => (
          <TableRow key={label} label={label} style={style} />
        ))}
      </tbody>
    </table>
  )
}
