
import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    const res = await axios.post("/api/chat", { message });
    setChatLog([...chatLog, { user: message, bot: res.data.reply }]);
    setMessage("");
  };

  return (
    <div>
      <h2>EventBot</h2>
      {chatLog.map((log, i) => (
        <p key={i}><b>You:</b> {log.user} <br/><b>Bot:</b> {log.bot}</p>
      ))}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
