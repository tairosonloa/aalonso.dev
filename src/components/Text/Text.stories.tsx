import React, { FC } from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Text, TextType } from './Text'

export default {
  title: 'Common|Text',
  component: Text,
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
            <Text textType={TextType.TITLE_BIG}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
            </Text>
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
            <Text textType={TextType.TITLE}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </Text>
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
            <Text textType={TextType.TITLE_SMALL}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor.
            </Text>
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
            <Text textType={TextType.PARAGRAPH_LEAD}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum.
            </Text>
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
            <Text textType={TextType.PARAGRAPH}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum.
            </Text>
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
            <Text textType={TextType.PARAGRAPH_SMALL}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum. elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas faucibus
              mollis interdum.
            </Text>
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
            <Text textType={TextType.FOOTNOTE}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
              tempus porttitor. Maecenas faucibus mollis interdum. elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas faucibus
              mollis interdum.
            </Text>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
