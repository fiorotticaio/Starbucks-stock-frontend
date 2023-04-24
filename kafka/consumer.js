const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092', 'localhost:9093'],
})

const consumer = kafka.consumer({ groupId: 'test-consumer-group' })

consumer.connect()

consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})