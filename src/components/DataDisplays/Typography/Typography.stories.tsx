import React, { FC } from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { Typography, TypographyType } from './Typography'

export default {
  title: 'Common|DataDisplay/Typography',
  component: Typography,
  decorators: [dimensionsDecorator()],
}

const FontSpec: FC<{
  name: string
  fontSize: number
  fontWeight: 'Regular' | 'Bold'
  lineHeight: number
  characterSpacing: number
}> = ({ name, fontSize, fontWeight, lineHeight, characterSpacing }) => {
  const fontSpecStyle = { fontSize: 14 }
  return (
    <>
      <p style={{ ...fontSpecStyle, fontWeight: 'bold' }}>{name}</p>
      <p style={fontSpecStyle}>
        {fontWeight}: {fontSize}px
      </p>
      <p style={fontSpecStyle}>Line Height: {lineHeight}px</p>
      <p style={fontSpecStyle}>Character Spacing: {characterSpacing}</p>
    </>
  )
}

export const Default = (): JSX.Element => {
  const columnStyle = { width: 200, height: 125 }
  return (
    <table>
      <tbody>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="H1 Title"
              fontWeight="Bold"
              fontSize={60}
              lineHeight={60}
              characterSpacing={1}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.TITLE_BIG}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="H2 Title"
              fontWeight="Bold"
              fontSize={42}
              lineHeight={48}
              characterSpacing={-0.3}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.TITLE}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="H3 Title"
              fontWeight="Bold"
              fontSize={28}
              lineHeight={34}
              characterSpacing={-0.2}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.TITLE_SMALL}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor.
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="Paragraph Lead"
              fontWeight="Regular"
              fontSize={20}
              lineHeight={30}
              characterSpacing={-0.2}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.PARAGRAPH_LEAD}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum.
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="Paragraph"
              fontWeight="Regular"
              fontSize={16}
              lineHeight={25}
              characterSpacing={-0.3}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.PARAGRAPH}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum.
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="Small Paragraph"
              fontWeight="Regular"
              fontSize={13}
              lineHeight={20}
              characterSpacing={-0.3}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.PARAGRAPH_SMALL}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum. elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas faucibus
              mollis interdum.
            </Typography>
          </td>
        </tr>
        <tr>
          <td style={columnStyle}>
            <FontSpec
              name="Footnote"
              fontWeight="Regular"
              fontSize={12}
              lineHeight={16}
              characterSpacing={-0.2}
            />
          </td>
          <td>
            <Typography typographyType={TypographyType.FOOTNOTE}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum. elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas faucibus
              mollis interdum.
            </Typography>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
