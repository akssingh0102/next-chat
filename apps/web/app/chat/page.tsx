'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ChatPage from '../../components/ChatPage';

const Home: React.FC = () => {
  //   const { data: session, status } = useSession();

  //   if (status === 'unauthenticated') {
  //     redirect('/');
  //     return null;
  //   } else if (status == 'loading') {
  //     return <>Loading ...</>;
  //   }

  return <ChatPage />;
};

export default Home;
