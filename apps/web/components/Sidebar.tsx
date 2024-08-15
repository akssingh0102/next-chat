import { useSession } from "next-auth/react";

const Sidebar: React.FC = () => {
  const { data: session } = useSession(); // Get session data

  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex-shrink-0 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:bg-gray-700 p-2 rounded block">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:bg-gray-700 p-2 rounded block">
              Chats
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:bg-gray-700 p-2 rounded block">
              Contacts
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:bg-gray-700 p-2 rounded block">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* User Info Card */}
      {session && (
        <div className="bg-gray-700 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold">{session.user?.name}</h3>
          <p className="text-sm text-gray-300">{session.user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
