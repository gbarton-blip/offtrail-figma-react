import IconButton from './IconButton'
import BrandIcon from '../BrandIcon/BrandIcon'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    glyph: {
      control: 'select',
      options: BrandIcon.glyphs,
    },
    variant: {
      control: 'select',
      options: IconButton.variants,
    },
    size: {
      control: 'select',
      options: IconButton.sizes,
    },
    disabled: { control: 'boolean' },
  },
}

export const Primary = {
  args: {
    glyph: 'caret',
    variant: 'primary',
    size: 'medium',
  },
}

export const Outline = {
  args: {
    glyph: 'caret',
    variant: 'outline',
    size: 'medium',
  },
}

export const Neutral = {
  args: {
    glyph: 'caret',
    variant: 'neutral',
    size: 'medium',
  },
}

export const Small = {
  args: {
    glyph: 'caret',
    variant: 'primary',
    size: 'small',
  },
}

export const Disabled = {
  args: {
    glyph: 'caret',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}
