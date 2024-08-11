'use client';
import { handleSendButtonOnClick } from '../lib/utils';
const SendMessageButton: React.FC = () => {
  return (
    <button
      type='button'
      className='rounded-md bg-green-200 ml-3 p-2'
      onClick={handleSendButtonOnClick}
    >
      Send
    </button>
  );
};

export default SendMessageButton;
