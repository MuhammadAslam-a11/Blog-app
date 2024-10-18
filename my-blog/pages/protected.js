// pages/protected.js
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function Protected() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin');
    }
  }, [loading, session, router]);

  if (loading) return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl">Protected Content</h1>
    </div>
  );
}
