"use client";

import { useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  useEffect(() => {
    // nothing special here, auth middleware will redirect if not logged in
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-md border">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Welcome{user?.name ? `, ${user.name}` : ''}!</h1>
          <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded-lg">Logout</button>
        </div>

        <p className="text-earth-600">This is your dashboard. Build your trip plans here.</p>

        {/* Placeholder blank content as requested */}
        <div className="mt-8 h-64 border-2 border-dashed rounded-lg flex items-center justify-center text-earth-400">
          Blank home page for logged-in users
        </div>
      </div>
    </main>
  );
}
