"use client";
import { useSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const LoggedOutComponent = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold text-gray-700">
        You are not signed in
      </h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

const LoggedInComponent = ({ session }: any) => {
  const router = useRouter(); // Initialize useRouter

  const handleChatRedirect = () => {
    router.push("/chat"); // Redirect to the /chat page
  };

  return (
    <div className="text-center p-6 flex flex-col">
      <h2 className="text-2xl font-semibold text-gray-700">
        Welcome, {session?.user?.email}
      </h2>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
        onClick={() => signOut()}
      >
        Sign out
      </button>
      <button
        className="rounded-lg bg-green-300 mt-4 py-2 px-4 hover:bg-green-500 transition duration-300"
        onClick={handleChatRedirect} // Use the redirect function on click
      >
        Chat
      </button>
    </div>
  );
};

export default function Home() {
  const { data: session, status } = useSession();

  console.log(`status: ${status}`);
  console.log(`session: ${JSON.stringify(session)}`);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {session ? (
          <LoggedInComponent session={session} />
        ) : (
          <LoggedOutComponent />
        )}
      </div>
    </div>
  );
}
