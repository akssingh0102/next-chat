'use client';
import { useSession } from 'next-auth/react';
import { signOut, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);
  console.log(session);

  return (
    <div>
      <div>
        {session ? (
          <>
            Signed in as {session?.user?.email} <br />
            <button
              className='bg-blue-200 rounded-lg'
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button className='bg-blue-200 rounded-lg' onClick={() => signIn()}>
              Sign in
            </button>
          </>
        )}
      </div>
      Hello for the app
    </div>
  );
}
