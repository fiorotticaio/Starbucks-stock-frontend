const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092'],
})

const consumer = kafka.consumer({ groupId: "price_group" })

consumer.connect()

consumer.subscribe({ topic: 'coffe_price', partition: 0 ,fromBeginning: true })

consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      topic,
      partition,
      value: message.value.toString(),
    })
  },
})