import { SerialPort, ReadlineParser } from 'serialport'

const pathPort = '/dev/ttyACM0'
const serialport = new SerialPort({ path: pathPort, baudRate: 9600 })
const parser = new ReadlineParser()
serialport.pipe(parser)

export default async ({ request, response }) => {
  const { actions } = request.body
  const parseResult = await parseData(actions)
  console.log('PARSE ACTIONS:', parseResult)

  for (let index = 0; index < parseResult.length; index++) {
    const singleAction = parseResult[index]
    await sendToPort(singleAction)
  }

  response.status(200).send({ status: 200, message: 'Acciones ejecutadas exitosamente!' })
}

async function parseData(actions) {
  let copyOfData
  copyOfData = actions
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split('')
  return copyOfData
}

const sendToPort = async singleAction => {
  await new Promise(resolve =>
    setTimeout(() => {
      serialport.write(singleAction /* + '\n' */, function (err) {
        if (err) return response.status(500).send({ status: 500, message: 'Ocurrio un error en el envio de las instrucciones' })
      })

      resolve(console.log('Sending action:', singleAction))
    }, 1500)
  )
}

parser.on('data', function (data) {
  console.log('Executed action:', data, '\n')
})

serialport.on('error', function (err) {
  console.log('Error de comunicación serial: ', err.message)
})
