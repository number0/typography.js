// @flow
import type { OptionsType } from 'Types'

const theme: OptionsType = {
  baseFontSize: '16px',
  baseLineHeight: '24px',
  modularScales: [
    {
      scale: 1.3125,
    },
  ],
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'Segoe UI', 'Arial', 'freesans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'], // eslint-disable-line
  bodyFontFamily: ['georgia', 'serif'],
  headerGray: 0,
  bodyGray: 20,
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  overrideStyles: () => ({
    'h2,h3,h4,h5,h6': {
      fontFamily: 'Georgia, "Bitstream Charter", serif',
      fontWeight: 'normal',
    },
    a: {
      color: '#0066cc',
    },
    'a:visited': {
      color: '#743399',
    },
    'a:active, a:hover': {
      color: '#ff4b33',
    },
    li: {
      marginBottom: 0,
    },
    'li > ul': {
      marginTop: 0,
    },
    blockquote: {
      fontStyle: 'italic',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: '3em',
      marginRight: '3em',
    },
    'blockquote cite': {
      fontStyle: 'normal',
    },
  }),
}

export default theme
