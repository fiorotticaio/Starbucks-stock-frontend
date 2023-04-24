const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093'],
})

const producer = kafka.producer()

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

const run = async () => {
  await producer.connect()
  setInterval(sendMessage, 1000);
}

run().catch(console.error);
