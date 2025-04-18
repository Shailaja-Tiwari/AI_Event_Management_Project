import React, { useEffect, useState } from 'react';

function App() {
  const [reply, setReply] = useState('');
  const [recommend, setRecommend] = useState(null);

  // This sends a message to chatbot
  const sendChat = () => {
    fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hi' })
    })
    .then(res => res.json())
    .then(data => setReply(data.reply))
    .catch(err => console.log(err));
  };

  // This fetches recommendation on page load
  useEffect(() => {
    fetch('http://localhost:5000/api/recommend?user_id=1')
      .then(res => res.json())
      .then(data => setRecommend(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>AI Event Management</h1>
      <button onClick={sendChat}>Talk to Chatbot</button>
      <p>Chatbot Reply: {reply}</p>
      <p>Recommendations: {recommend && JSON.stringify(recommend)}</p>
    </div>
  );
}

export default App;
