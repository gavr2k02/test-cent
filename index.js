import { CentClient } from "cent.js";

async function sendMessage(channel, message) {
  const client = new CentClient({
    url: CENTRIFUGO_API_URL,
    token: CENTRIFUGO_API_KEY,
  });

  try {
    console.log("Publishing message to channel");
    await client.publish({ channel: "channel", data: "message" });
    console.log("Message published successfully");
  } catch (error) {
    console.error("Error publishing message:", error);
  }
}

sendMessage("channel", "Hello");
