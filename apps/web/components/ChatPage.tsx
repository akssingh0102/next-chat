import { Session } from 'next-auth/react';

interface ChatPageProps {
  session: Session;
}

const ChatPage: React.FC<ChatPageProps> = ({ session }) => {
  return (
    <div>
      <div>Welcome to the next-chat {session.user?.name}</div>
      <div>Chat Page</div>
    </div>
  );
};

export default ChatPage;
