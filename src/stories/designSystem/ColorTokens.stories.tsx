/** @jsxImportSource @emotion/react */
import { colors } from '@/tokens/colors'
import styled from '@emotion/styled'
import { Meta } from '@storybook/react'

export default {
  title: 'Design Tokens/Colors',
} as Meta

const ColorItem = ({ name, value }: { name: string; value: string }) => (
  <ColorCard>
    <ColorCircle style={{ backgroundColor: value }} />
    <Label>{name}</Label>
    <Code>{value}</Code>
  </ColorCard>
)

const renderColorGroup = (groupName: string, group: Record<string, string>) => (
  <Group>
    <GroupTitle>{groupName}</GroupTitle>
    <Grid>
      {Object.entries(group).map(([key, val]) => (
        <ColorItem key={key} name={key} value={val} />
      ))}
    </Grid>
  </Group>
)

export const ColorPalette = () => {
  const primary = Object.fromEntries(
    Object.entries(colors).filter(([key]) => key.startsWith('primary')),
  )
  const grayscale = Object.fromEntries(
    Object.entries(colors).filter(
      ([key]) => key.startsWith('gray') || key === 'black' || key === 'white',
    ),
  )
  const secondary = Object.fromEntries(
    Object.entries(colors).filter(([key]) => key.startsWith('secondary')),
  )
  const other = Object.fromEntries(
    Object.entries(colors).filter(([key]) => key === 'error'),
  )

  return (
    <>
      {renderColorGroup('Primary Colors', primary)}
      {renderColorGroup('Grayscale', grayscale)}
      {renderColorGroup('Secondary Colors', secondary)}
      {renderColorGroup('Others', other)}
    </>
  )
}

// Styled components
const Group = styled.div`
  margin-bottom: 40px;
`

const GroupTitle = styled.h2`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const ColorCard = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ColorCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ddd;
  margin-bottom: 6px;
`

const Label = styled.div`
  font-size: 12px;
  color: #333;
  font-weight: 500;
`

const Code = styled.div`
  font-size: 10px;
  color: #666;
`
