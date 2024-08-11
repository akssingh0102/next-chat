import { useRecoilState } from 'recoil';
import SendMessageButton from './SendMessageButton';
import { sendMessageTextState } from '../stores/stores';

interface ChatMessageProps {
  text: string;
  sender: string;
  time: string;
  isSender: boolean;
  isRead?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  sender,
  time,
  isSender,
  isRead,
}) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs rounded-xl p-4 shadow-lg ${
          isSender
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        <div className='text-xs font-medium mb-1'>{sender}</div>
        <div className='text-sm leading-relaxed'>{text}</div>
        <div className='text-xs text-right mt-2 opacity-75'>
          {time}
          {isSender && isRead && (
            <span className='ml-2 text-green-400'>• Read</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ChatPage: React.FC = () => {
  const [sendMessageText, setSendMessageText] =
    useRecoilState(sendMessageTextState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSendMessageText(event.target.value);
  };

  return (
    <div className='flex flex-col h-screen bg-gray-50'>
      <div className='text-center py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'>
        <div className='text-xl font-bold'>Next Chat</div>
        <div className='text-sm'>Chat Page</div>
      </div>

      <div className='flex-grow p-4 overflow-y-auto'>
        {/* Example Chat Messages */}
        <ChatMessage
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
        />
      </div>

      <div
        id='write-and-send-div'
        className='bg-white p-3 flex items-center fixed bottom-0 w-full shadow-lg border-t border-gray-200'
      >
        <input
          type='text'
          name='chat-input'
          placeholder='Type your message...'
          className='flex-grow rounded-full bg-gray-200 p-3 mr-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out'
          onChange={handleChange}
        />
        <SendMessageButton />
      </div>
    </div>
  );
};

export default ChatPage;
