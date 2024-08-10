'use client';
import { useSession, Session } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ChatPage from '../../components/ChatPage';

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    return redirect('/');
  }

  return <ChatPage session={session as Session} />;
};

export default Home;
