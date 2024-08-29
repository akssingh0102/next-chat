import useSocketIO from '../hooks/useWebSocket';
import ChatMessage from './ChatMessage';

const ChatMessages: React.FC = () => {
  const { messages, sendMessage } = useSocketIO('ws://localhost:4000');

  return (
    <div className='flex-grow p-4 overflow-y-auto'>
      {/* Example Chat Messages */}
      {/* <ChatMessage
        text='Hey, how are you?'
        sender='John Doe'
        time='10:30 AM'
        isSender={false}
      />
      <ChatMessage
        text='I am good, thanks! What about you?'
        sender='You'
        time='10:32 AM'
        isSender={true}
        isRead={true}
      />
      <ChatMessage
        text='I am doing well too.'
        sender='John Doe'
        time='10:33 AM'
        isSender={false}
      />
      <ChatMessage
        text='Great to hear!'
        sender='You'
        time='10:35 AM'
        isSender={true}
        isRead={false}
      /> */}

      {messages.map(([message, key]) => {
        if (message)
          return (
            <ChatMessage
              text={message}
              sender='You'
              time='10:35 AM'
              isSender={true}
              isRead={false}
              key={key}
            />
          );
      })}
    </div>
  );
};

export default ChatMessages;
