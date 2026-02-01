'use client';

import { useState } from 'react';

export default function CreateTripModal({ isOpen, onClose, onCreate }) {
  const [formData, setFormData] = useState({
    name: '',
    plannedDate: '',
    plannedDuration: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.plannedDate || !formData.plannedDuration) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.plannedDuration < 1) {
      setError('Duration must be at least 1 day');
      return;
    }

    setLoading(true);
    try {
      await onCreate({
        name: formData.name,
        plannedDate: new Date(formData.plannedDate).toISOString(),
        plannedDuration: parseInt(formData.plannedDuration),
      });
      
      setFormData({ name: '', plannedDate: '', plannedDuration: '' });
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to create trip');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-sand-200 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-primary">
              Create New Trip
            </h2>
            <button
              onClick={onClose}
              className="text-earth-400 hover:text-earth-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Trip Name */}
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Trip Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Summer Europe Adventure"
                className="w-full px-4 py-2 border border-sand-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>

            {/* Planned Date */}
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Planned Date
              </label>
              <input
                type="date"
                name="plannedDate"
                value={formData.plannedDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-sand-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Duration (days)
              </label>
              <input
                type="number"
                name="plannedDuration"
                value={formData.plannedDuration}
                onChange={handleChange}
                placeholder="e.g., 7"
                min="1"
                className="w-full px-4 py-2 border border-sand-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-sand-200 text-earth-700 font-medium rounded-lg hover:bg-sand-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating...' : 'Create Trip'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}