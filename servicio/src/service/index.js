// import { SerialPort, ReadlineParser } from 'serialport'

// async function parseData(actions) {
//   let copyOfData
//   copyOfData = actions
//     .replace(/[^a-zA-Z]/g, '')
//     .toLowerCase()
//     .split('')
//   return copyOfData
// }

// parser.on('data', function (data) {
//   console.log('Executed action:', data, '\n')
// })

// serialport.on('error', function (err) {
//   console.log('Error de comunicación serial: ', err.message)
// })

export default async ({ request, response }) => {
  //...
  console.log(request.body)
}
