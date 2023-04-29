const express = require('express');
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'],
})

const producer = kafka.producer()

async function sendMessage() {
  try {
    await producer.connect()
    await producer.send({
      topic: 'coffee_price',
      messages: [
        { key: "web_coffee_price", value: "4" },
      ],
    })
  } catch (err) {
    console.error('could not write message ' + err)
  } finally {
    producer.disconnect()
  }
}

const app = express();

app.get("/send-message", (request, response) => {
  sendMessage();
  return response.status(200);
});

app.listen(3333, () => { console.log("Server running") });