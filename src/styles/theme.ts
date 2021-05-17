import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: 'light',
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  radii: {},
  fontSizes: {},
  colors: {},
  sizes: {}
});

export default theme;
