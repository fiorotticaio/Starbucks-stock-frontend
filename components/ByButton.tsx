import { sendMessage } from "@/kafka/producer";


export default function ByButton() {
  async function handleClick() {
    fetch("http://localhost:3333/send-message");
  }

  return (
    <button onClick={() => handleClick()}>Enviar mensagem para o kafka</button>
  )
}