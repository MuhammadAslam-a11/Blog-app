// pages/signin.js
import { signIn, signOut, useSession } from 'next-auth/client';
import 'tailwindcss/tailwind.css';

export default function SignIn() {
  const [session, loading] = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        {!session && (
          <>
            <h1 className="text-2xl mb-4">Sign In</h1>
            <button
              onClick={() => signIn('google')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn('github')}
              className="bg-gray-800 text-white px-4 py-2 rounded mt-2"
            >
              Sign in with GitHub
            </button>
            <button
              onClick={() => signIn('email')}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Sign in with Email
            </button>
          </>
        )}
        {session && (
          <>
            <h1 className="text-2xl mb-4">Welcome, {session.user.email}</h1>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
