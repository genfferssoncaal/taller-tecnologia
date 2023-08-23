import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#44997a'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
