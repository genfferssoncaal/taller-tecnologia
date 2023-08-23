import { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const steps = ['Envio de acciones', 'Interprestación en el servidor']

export default function MyForm() {
  const [actions, setActions] = useState('')
  const [responseApi, setResponseApi] = useState({ result: false, message: '' })
  const [loading, setLoading] = useState(false)

  const handleInputChange = event => {
    setActions(event.target.value)
  }

  const sendActions = async event => {
    event.preventDefault()
    window.alert('Sending: ' + actions)
    // setLoading(true)
    // await axios
    //   .post(`http://127.0.0.1:3001/actions`, {
    //     actions
    //   })
    //   .then(({ data }) => {
    //     console.log('Response:', data)
    //     setResponseApi(data)
    //   })
    //   .catch(({ response }) => {
    //     console.log('Erro:', response)
    //     setResponseApi(response)
    //   })
    // setLoading(false)
  }

  return (
    <>
      <form onSubmit={sendActions}>
        <Typography component='h4' variant='h5' align='center'>
          Flujo de datos
        </Typography>
        <Stepper activeStep={loading ? 1 : 0} sx={{ pt: 3, pb: 5 }}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant='h6' gutterBottom>
          Secuencia de acciones
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              error={responseApi?.result}
              helperText={responseApi?.message}
              disabled={loading}
              onChange={handleInputChange}
              required
              id='actions'
              label='Acciones'
              fullWidth
              autoComplete='off'
              variant='standard'
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button disabled={loading} variant='contained' type='submit' sx={{ mt: 3, ml: 1 }}>
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </Box>
      </form>
    </>
  )
}
