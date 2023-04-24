import { run } from '../kafka/producer.js'
import { io } from 'socket.io-client'

export default function ByButton() {

  const handleClick = () => {
    // const socket = io('http://localhost:9092');
    // socket.emit('test-topic', () => {
    //   console.log('connected')
    // })
    run().catch(console.error)
  }

  return (
    <button onClick={handleClick}>Enviar mensagem para o kafka</button>
  )
}