import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      Project created with ReactJS {new Date().getFullYear()}
    </Typography>
  )
}
