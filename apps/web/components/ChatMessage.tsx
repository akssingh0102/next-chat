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
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs rounded-xl p-4 shadow-lg ${
          isSender
            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="text-xs font-medium mb-1">{sender}</div>
        <div className="text-sm leading-relaxed">{text}</div>
        <div className="text-xs text-right mt-2 opacity-75">
          {time}
          {isSender && isRead && (
            <span className="ml-2 text-green-400">• Read</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
