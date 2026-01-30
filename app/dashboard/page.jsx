'use client';

import Link from 'next/link';
import { useAuth } from '../../src/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const router = useRouter();
  

    const handleLogout = async () => {
        await logout();
        router.push('/')
    };

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <header className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">TB</span>
            </div>
            <span className="font-display text-xl font-bold text-primary">
              Travel Buddy
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-earth-600">
              {user?.email || 'demo@travelbuddy.com'}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-primary hover:underline"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display text-3xl font-bold mb-2">
          Welcome back 👋
        </h1>
        <p className="text-earth-600 mb-8">
          Ready to plan your next adventure?
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <DashboardCard title="Trips Planned" value="3" />
          <DashboardCard title="Countries Visited" value="5" />
          <DashboardCard title="Upcoming Trips" value="1" />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionCard
            title="Plan a New Trip"
            description="Create an itinerary, pick destinations, and organize your travel plans."
            href="#"
            buttonText="Start Planning"
          />

          <ActionCard
            title="View Saved Trips"
            description="Review and edit trips you’ve already planned."
            href="#"
            buttonText="View Trips"
          />
        </div>

        {/* Demo note */}
        <div className="mt-10 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <p className="text-sm text-earth-700">
            <strong>Demo:</strong> This dashboard is UI-only for now. Data and
            features will be wired up later.
          </p>
        </div>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
      <p className="text-sm text-earth-600 mb-2">{title}</p>
      <p className="font-display text-3xl font-bold">{value}</p>
    </div>
  );
}

function ActionCard({ title, description, href, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
        <p className="text-earth-600 mb-6">{description}</p>
      </div>
      <Link
        href={href}
        className="inline-block text-center py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}
