const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'],
})

const producer = kafka.producer()

export async function sendMessage() {
  try {
    await producer.connect()

    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
  } catch (err) {
    console.error('could not write message ' + err)
  } finally {
    producer.disconnect()
  }
}