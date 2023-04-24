const { Kafka } = require('kafkajs')

const run = async () => {
  const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092'],
  })
  
  const producer = kafka.producer()
  await producer.connect()
  
  const sendMessage = async () => {
    try {
      await producer.send({
        topic: 'test-topic',
        messages: [
          { value: 'Hello KafkaJS user!' },
        ],
      })
    } catch (err) {
      console.error('could not write message ' + err)
    }
  }
  sendMessage();
}

const disconnect = () => {
  producer.disconnect()
}

module.exports = { run, disconnect }