'use client';
// pages/chat.tsx
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const ChatPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    // Initialize socket connection to the server running on localhost:4000
    const socketIo = io('http://localhost:4000');

    setSocket(socketIo);

    socketIo.on('connect', () => {
      console.log('Connected to server');
    });

    socketIo.on('message', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chat Room</h1>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
          height: '300px',
          overflowY: 'scroll',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            {msg}
          </div>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        placeholder='Type your message here...'
      />
      <button
        onClick={sendMessage}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default ChatPage;
