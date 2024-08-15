import { useRecoilState } from 'recoil';
import { sendMessageTextState } from '../stores/stores';
import SendMessageButton from './SendMessageButton';

const MessageInput: React.FC = () => {
  const [, setSendMessageText] = useRecoilState(sendMessageTextState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSendMessageText(event.target.value);
  };

  return (
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
  );
};

export default MessageInput;
