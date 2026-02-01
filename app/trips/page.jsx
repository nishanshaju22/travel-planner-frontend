'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import TripCard from '../../src/components/TripCard';
import CreateTripModal from '../../src/components/CreateTripModal';
import { tripsApi } from '../../src/api/tripApi';

export default function TripsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all trips
  useEffect(() => {
    const fetchTrips = async () => {
      if (!user?.id) return;

      try {
        setLoading(true);
        const response = await tripsApi.getAllTrips(user.id);
        
        if (response.status === 'success') {
          setTrips(Array.isArray(response.data.trips) ? response.data.trips : response.data.trips ? [response.data.trips] : []);
        }
      } catch (err) {
        setError(err.message || 'Failed to load trips');
        console.error('Error fetching trips:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [user?.id]);

  const handleCreateTrip = async (tripData) => {
    try {
      const response = await tripsApi.createTrip(user.id, tripData);
      
      if (response.status === 'success') {
        setTrips((prev) => [response.data.trip, ...prev]);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      const response = await tripsApi.deleteTrip(user.id, tripId);
      
      if (response.status === 'success') {
        setTrips((prev) => prev.filter((trip) => trip.id !== tripId));
      }
    } catch (err) {
      setError(err.message || 'Failed to delete trip');
      console.error('Error deleting trip:', err);
    }
  };

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <header className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">
              My Trips
            </h1>
            <p className="text-sm text-earth-600 mt-1">
              Plan and manage all your adventures
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Trip</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-white rounded-xl border border-sand-200 animate-pulse"
              ></div>
            ))}
          </div>
        ) : trips.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-2">
              No trips yet
            </h2>
            <p className="text-earth-600 mb-6">
              Start planning your first adventure by creating a new trip
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create First Trip</span>
            </button>
          </div>
        ) : (
          /* Trips Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                onDelete={handleDeleteTrip}
              />
            ))}
          </div>
        )}
      </main>

      {/* Create Trip Modal */}
      <CreateTripModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateTrip}
      />
    </div>
  );
}