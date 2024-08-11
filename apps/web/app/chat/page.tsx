'use client';
import { useSession, Session } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ChatPage from '../../components/ChatPage';

const Home: React.FC = () => {
  const { data: session, status } = useSession<Session>(); // Explicitly typing session as a `Session`

  if (status === 'unauthenticated') {
    redirect('/');
    return null;
  } else if (status == 'loading') {
    return <>Loading ...</>;
  }

  return <ChatPage />;
};

export default Home;
