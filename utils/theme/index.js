import { extendTheme } from '@chakra-ui/react'
import colorMode from './colorMode'

const config = {
  ...colorMode,
}

export const theme = extendTheme({ config })