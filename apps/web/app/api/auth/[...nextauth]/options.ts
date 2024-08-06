import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'email', type: 'text', placeholder: 'john@doe.com' },
        password: { label: 'password', type: 'password', placeholder: '****' },
      },
      async authorize(credentials: any) {
        return {
          id: 'user1',
          email: credentials.username,
          name: credentials.username,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
