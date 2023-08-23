import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Footer from './components/Footer'
import MyForm from './components/MyForm'

export default function App() {
  return (
    <>
      <AppBar
        position='absolute'
        color='default'
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: t => `1px solid ${t.palette.divider}`
        }}
      >
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Taller de innovación tecnológica
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* Formulario */}
          <MyForm />
          {/* Formulario */}
        </Paper>
        <Footer />
      </Container>
    </>
  )
}
