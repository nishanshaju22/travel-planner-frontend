'use client';

import Link from 'next/link';

export default function TripCard({ trip, onDelete }) {
  const plannedDate = new Date(trip.plannedDate);
  const createdDate = new Date(trip.createdAt);
  
  const formattedDate = plannedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${trip.name}"?`)) {
      onDelete(trip.id);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-sand-200 hover:border-primary/30 transition-all duration-300 hover:shadow-md overflow-hidden group">
      {/* Card Header with gradient accent */}
      <div className="h-1 bg-gradient-to-r from-primary to-primary-dark"></div>
      
      <div className="p-6">
        {/* Trip Name */}
        <h3 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
          {trip.name}
        </h3>

        {/* Trip Info Grid */}
        <div className="space-y-3 mb-6">
          {/* Planned Date */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-earth-600">
              <span className="font-medium text-earth-700">{formattedDate}</span>
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-earth-600">
              <span className="font-medium text-earth-700">{trip.plannedDuration}</span> days
            </span>
          </div>

          {/* Created Date */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-earth-500">
              Created {createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Link
            href={`/dashboard/trips/${trip.id}`}
            className="flex-1 text-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-medium text-sm rounded-lg transition-all duration-200"
          >
            View Details
          </Link>
          <button
            onClick={handleDelete}
            className="px-3 py-2 text-earth-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            title="Delete trip"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}