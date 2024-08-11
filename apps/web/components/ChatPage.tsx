import SendMessageButton from './SendMessageButton';

const ChatPage: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='text-center'>
        <div>Welcome to the next-chat</div>
        <div>Chat Page</div>
      </div>

      <div id='write-and-send-div' className=' bg-slate-200 h-full p-2'>
        <div>
          <input
            type='text'
            name='chat-input'
            className='rounded-md bg-slate-300 p-2 bottom-2'
          />
          <SendMessageButton />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
