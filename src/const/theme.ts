import { DefaultTheme } from 'styled-components'
import { colors } from './colors'
import { fonts } from './font'

export const lightTheme: DefaultTheme = {
  colors: { ...colors },
  fonts: { ...fonts },
  header: {
    background: colors.white,
    border: colors.gray,
    text: colors.gunmetal,
  },
  footer: {
    background: colors.white,
    border: colors.gray,
    text: colors.gunmetal,
  },
  wrapper: {
    background: colors.white,
  },
}

export const darkTheme: DefaultTheme = {
  colors: { ...colors },
  fonts: { ...fonts },
  header: {
    background: colors.gunmetal,
    text: colors.white,
  },
  footer: {
    background: colors.gunmetal,
    text: colors.white,
  },
  wrapper: {
    background: colors.gunmetal,
  },
}
