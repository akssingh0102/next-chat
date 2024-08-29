import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type UseSocketIOHook = {
  messages: string[];
  // eslint-disable-next-line no-unused-vars
  sendMessage: (message: string) => void;
};

const useSocketIO = (url: string): UseSocketIOHook => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance: Socket = io(url);
    setSocket(socketInstance);

    socketInstance.on('message', (data: string) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('message', message);
    }
  };

  return { messages, sendMessage };
};

export default useSocketIO;
