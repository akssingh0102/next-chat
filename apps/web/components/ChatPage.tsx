import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <ChatHeader />
        <ChatMessages />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatPage;
